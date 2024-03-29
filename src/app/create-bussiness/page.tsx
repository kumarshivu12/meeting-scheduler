"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BussinessType } from "@/lib/types";
import { bussinessSchema } from "@/lib/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/config/firebaseConfig";
import { toast } from "sonner";

function CreateBussiness() {
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const db = getFirestore(app);

  const form = useForm<BussinessType>({
    resolver: zodResolver(bussinessSchema),
    defaultValues: {
      bussinessName: "",
    },
    mode: "onChange",
  });
  const { handleSubmit, control, formState } = form;
  const { isValid, isSubmitting } = formState;

  const onSubmit = async (values: BussinessType) => {
    try {
      await setDoc(doc(db, "Bussiness", user?.email as string), {
        bussinessName: values.bussinessName.replace(" ", "_"),
        email: user?.email,
        userName: user?.given_name + " " + user?.family_name,
      });
      toast.success("Bussiness created successfully");
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating bussiness");
    }
  };
  return (
    <div className="p-14 items-center flex flex-col gap-20 my-10">
      <Image src={logo} alt="logo" width={200} height={200} />
      <div className="flex flex-col items-center gap-4 max-w-3xl">
        <h2 className="text-4xl font-bold">
          What should we call your business?
        </h2>
        <p className="text-slate-500">
          You can always change this later from settings
        </p>
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <FormField
                control={control}
                name="bussinessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Name :</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Ex. Noobs" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateBussiness;
