"use client";
import { useState } from "react";
import { MeetingType } from "@/lib/types";
import MeetingForm from "./_components/MeetingForm";
import PreviewMeeting from "./_components/PreviewMeeting";

const defaultValues: MeetingType = {
  eventName: "",
  duration: 15,
  locationType: "",
  locationUrl: "",
  themeColor: "",
};
function CreateMeeting() {
  const [formValues, setFormValues] = useState<MeetingType>(defaultValues);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="shadow-md border h-screen">
        <MeetingForm
          formValues={formValues}
          setFormValues={(values) => setFormValues(values)}
        />
      </div>
      <div className="md:col-span-2">
        <PreviewMeeting formValues={formValues} />
      </div>
    </div>
  );
}

export default CreateMeeting;
