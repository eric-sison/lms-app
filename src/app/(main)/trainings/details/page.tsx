import { TrainingDetailsAttachments } from "@lms/components/features/training/TrainingDetailsAttachments";
import { TrainingDetailsCourseDescription } from "@lms/components/features/training/TrainingDetailsCourseDescription";
import { TrainingDetailsCourseOutline } from "@lms/components/features/training/TrainingDetailsCourseOutline";
import { TrainingDetailsHeader } from "@lms/components/features/training/TrainingDetailsHeader";
import { TrainingDetailsPageManager } from "@lms/components/features/training/TrainingDetailsPageManager";
import { TrainingDetailsTab } from "@lms/components/features/training/TrainingDetailsTab";

export default function TrainingDetails() {
  return (
    // <div>
    //   <TrainingDetailsTab />
    //   <div className="p-5 md:p-10 lg:p-12">
    //     <TrainingDetailsHeader />
    //     <TrainingDetailsCourseDescription />
    //     <TrainingDetailsCourseOutline />
    //     <TrainingDetailsAttachments />
    //   </div>
    // </div>
    <TrainingDetailsPageManager />
  );
}
