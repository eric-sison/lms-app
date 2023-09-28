import { LmsClient } from "@lms/_sdk/client/LmsClient";
import { TrainingPage } from "@lms/components/features/training/TrainingPage";

const client = LmsClient.getInstance();

export default async function Trainings() {
  const trainings = await client.trainingRoutes().getAllTrainings();

  return <TrainingPage trainings={trainings} />;
}
