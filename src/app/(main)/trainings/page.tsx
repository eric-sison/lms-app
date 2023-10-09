import { TrainingCardGrid } from "@lms/components/features/training/TrainingCardGrid";
import { TrainingTabStatus } from "@lms/components/features/training/TrainingTabStatus";
import { PageProps } from "@lms/types/pageProps";
import { redirect } from "next/navigation";

export default async function Trainings({ searchParams }: PageProps) {
  if (searchParams?.filter === undefined || searchParams?.filter === "")
    redirect("/trainings/?filter=all");

  return (
    <>
      <TrainingTabStatus />

      <main className="px-10 pt-10 space-y-5">
        <TrainingCardGrid />
      </main>
    </>
  );
}
