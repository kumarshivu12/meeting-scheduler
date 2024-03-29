"use client";
import { MeetingType } from "@/lib/types";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { generateTimeSlots } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MeetingFormProps {
  formValues: MeetingType;
}

function PreviewMeeting({ formValues }: MeetingFormProps) {
  const [date, setDate] = useState(new Date());
  const timeSlots = generateTimeSlots(formValues?.duration);

  return (
    <div
      className="p-6 py-12 shadow-lg m-6 border-t-8 rounded-md"
      style={{ borderTopColor: formValues?.themeColor }}
    >
      <Image src={logo} alt="logo" width={150} height={150} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        <div className="p-4 border-r">
          <h2>Business Name</h2>
          <h2 className="font-bold text-3xl">
            {formValues?.eventName ? formValues?.eventName : "Meeting Name"}
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            <h2 className="flex gap-2">
              <Clock />
              {formValues?.duration} Min{" "}
            </h2>
            <h2 className="flex gap-2">
              <MapPin />
              {formValues?.locationType} Meeting{" "}
            </h2>
            <Link href={"#"} className="text-primary">
              {formValues?.locationUrl}
            </Link>
          </div>
        </div>
        {/* Time & Date Selction  */}
        <div className="md:col-span-2 flex px-4">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Select Date & Time</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mt-5"
              disabled={(date) => date <= new Date()}
            />
          </div>
          <div
            className="flex flex-col w-full overflow-auto gap-4 p-5"
            style={{ maxHeight: "400px" }}
          >
            {timeSlots?.map((time, index) => (
              <Button
                key={index}
                className="border-primary text-primary"
                variant="outline"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewMeeting;
