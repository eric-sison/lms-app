"use client";

import { FunctionComponent } from "react";
import { TrainingDetailsTab } from "./TrainingDetailsTab";
import { TrainingDetailsAttachments } from "./TrainingDetailsAttachments";
import { TrainingDetailsCourseDescription } from "./TrainingDetailsCourseDescription";
import { TrainingDetailsCourseOutline } from "./TrainingDetailsCourseOutline";
import { TrainingDetailsHeader } from "./TrainingDetailsHeader";
import { TrainingParticipants } from "./TrainingParticipants";
import { TrainingMaterials } from "./TrainingMaterials";
import { useSearchParams } from "next/navigation";

export const TrainingDetailsPageManager: FunctionComponent = () => {
  const tab = useSearchParams().get("pos");

  return (
    <>
      <TrainingDetailsTab />

      <div>
        {tab === "details" && (
          <div className="p-5 md:p-10 lg:p-12">
            <TrainingDetailsHeader />
            <TrainingDetailsCourseDescription />
            <TrainingDetailsCourseOutline />
            {/* <TrainingDetailsAttachments /> */}
          </div>
        )}

        {tab === "participants" && (
          <>
            <TrainingParticipants />
          </>
        )}

        {tab === "requirements" && <>Requirements</>}

        {tab === "materials" && (
          <>
            <TrainingMaterials />
          </>
        )}
      </div>
    </>
  );
};
