import { LmsClient } from "@lms/_sdk/client/LmsClient";
import { Testing } from "@lms/components/features/training/Testing";

export default async function Dashboard() {
  // const client = LmsClient.getInstance();

  // client.getTrainingRoutes().getTrainingById({
  //   // params: "training_001",
  //   queries: [{ status: "ongoing" }, { page: 1 }, { limit: 10 }],
  //   params: "cde5adc3-a5a4-405d-bfe5-72a31d9825da",
  //   version: 3,
  // });

  // const trainings = await client.getTrainingRoutes().getAllTrainings({
  //   params: "training_001",
  //   queries: [
  //     { key: "status", value: "ongoing" },
  //     { key: "limit", value: 10 },
  //     { key: "page", value: 1 },
  //   ],
  // });

  return (
    <>
      <Testing />
    </>
  );
}
