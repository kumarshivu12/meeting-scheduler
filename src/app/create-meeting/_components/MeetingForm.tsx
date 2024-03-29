"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCATION_ITEMS, THEME_OPTIONS } from "@/constants/constants";
import Image from "next/image";
import { toast } from "sonner";
import { meetingSchema } from "@/lib/schemas";
import { MeetingType } from "@/lib/types";
import { useEffect } from "react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { app } from "@/config/firebaseConfig";

interface MeetingFormProps {
  formValues: MeetingType;
  setFormValues: React.Dispatch<React.SetStateAction<MeetingType>>;
}
function MeetingForm({ formValues, setFormValues }: MeetingFormProps) {
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const db = getFirestore(app);

  const form = useForm<MeetingType>({
    resolver: zodResolver(meetingSchema),
    defaultValues: formValues,
    mode: "onChange",
  });
  const { handleSubmit, control, watch, formState, reset } = form;
  const { isValid, isSubmitting } = formState;
  const eventName = watch("eventName");
  const duration = watch("duration");
  const locationType = watch("locationType");
  const locationUrl = watch("locationUrl");
  const themeColor = watch("themeColor");

  async function onSubmit(values: MeetingType) {
    setFormValues(values);
    const id = Date.now().toString();
    try {
      await setDoc(doc(db, "MeetingEvent", id), {
        id: id,
        eventName: eventName,
        duration: duration,
        locationType: locationType,
        locationUrl: locationUrl,
        themeColor: themeColor,
        businessId: doc(db, "Business", user?.email as string),
        createdBy: user?.email,
      });
      toast("New Meeting Event Created!");
      router.replace("/dashboard/meeting-type");
      reset();
      toast.success("Meeting created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating meeting!");
    }
  }
  useEffect(() => {
    setFormValues((prevValues) => ({
      ...prevValues,
      eventName,
      duration,
      locationType,
      locationUrl,
      themeColor,
    }));
  }, [eventName, duration, locationType, locationUrl, themeColor]);

  return (
    <div className="p-6">
      <Link href={"/dashboard"}>
        <h2 className="flex gap-2">
          <ChevronLeft /> Cancel
        </h2>
      </Link>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">Create New Event</h2>
        <hr className="mb-4"></hr>
      </div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <FormField
            control={control}
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name :</FormLabel>
                <FormControl>
                  <Input placeholder="Name of your meeting event" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration :</FormLabel>
                <FormControl>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full">
                        {field.value} Min
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {[15, 30, 45, 60].map((d) => (
                        <DropdownMenuItem
                          key={d}
                          onClick={() => field.onChange(d)}
                        >
                          {d} Min
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="locationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location :</FormLabel>
                <FormControl>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {LOCATION_ITEMS.map((option) => (
                      <div
                        key={option.name}
                        className={`border flex flex-col justify-center items-center p-3 rounded-lg cursor-pointer hover:bg-blue-100 hover:border-primary ${
                          field.value === option.name &&
                          "bg-blue-100 border-primary"
                        }`}
                        onClick={() => field.onChange(option.name)}
                      >
                        <Image
                          src={option.icon}
                          width={30}
                          height={30}
                          alt={option.name}
                        />
                        <h2>{option.name}</h2>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {watch("locationType") && (
            <FormField
              control={control}
              name="locationUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add {watch("locationType")} URL :</FormLabel>
                  <FormControl>
                    <Input placeholder="Add Url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={control}
            name="themeColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Theme Color :</FormLabel>
                <FormControl>
                  <div className="flex flew-wrap justify-start gap-6 cursor-pointer">
                    {THEME_OPTIONS.map((color) => (
                      <div
                        key={color}
                        className={`h-7 w-7 rounded-full ${
                          field.value === color && "ring-4 ring-blue-200"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => field.onChange(color)}
                      ></div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full mt-8"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default MeetingForm;
