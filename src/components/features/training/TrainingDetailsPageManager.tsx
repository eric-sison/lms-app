"use client";

import { useTrainingDetailsTab } from "@lms/utils/zustand/trainingDetailsTabStore";
import { FunctionComponent } from "react";
import { TrainingDetailsTab } from "./TrainingDetailsTab";
import { TrainingDetailsAttachments } from "./TrainingDetailsAttachments";
import { TrainingDetailsCourseDescription } from "./TrainingDetailsCourseDescription";
import { TrainingDetailsCourseOutline } from "./TrainingDetailsCourseOutline";
import { TrainingDetailsHeader } from "./TrainingDetailsHeader";

export const TrainingDetailsPageManager: FunctionComponent = () => {
  const tab = useTrainingDetailsTab((state) => state.tab);

  return (
    <>
      <TrainingDetailsTab />

      <div className="p-5 md:p-10 lg:p-12">
        {tab === "details" && (
          <>
            <TrainingDetailsHeader />
            <TrainingDetailsCourseDescription />
            <TrainingDetailsCourseOutline />
            <TrainingDetailsAttachments />
          </>
        )}

        {tab === "participants" && <>Participants</>}

        {tab === "requirements" && <>Requirements</>}

        {tab === "materials" && <>Course Materials</>}
      </div>
    </>
  );
};
