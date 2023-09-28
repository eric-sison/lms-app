import { TrainingCardLoader } from "@lms/components/features/training/TrainingCardLoader";
import Link from "next/link";

export default function LoadTrainingPage() {
  return (
    <div>
      <header className="h-24 border-b dark:border-b-zinc-700 flex flex-col px-10">
        <section className="flex-1">
          <div className="h-full flex items-end space-x-5">
            <section className="flex items-start">
              <Link
                href="/trainings?filter=all"
                className={` border-b-indigo-600 border-b-4 font-medium text-zinc-200 pb-3 px-2`}
              >
                All Trainings
              </Link>
              {/* <p className="bg-zinc-700 px-2 rounded-lg py-1 text-xs font-semibold">21</p> */}
            </section>
            <section className="flex items-start">
              <Link
                href="/trainings?filter=ongoing"
                className={`border-b-transparent border-b-4 font-medium text-zinc-200 pb-3 px-2`}
              >
                Ongoing
              </Link>
              {/* <p className="bg-zinc-700 px-2 rounded-lg py-1 text-xs font-semibold">2</p> */}
            </section>
            <section className="flex items-start">
              <Link
                href="/trainings?filter=upcoming"
                className={`border-b-transparent border-b-4 font-medium text-zinc-200 pb-3 px-2`}
              >
                Upcoming
              </Link>
              {/* <p className="bg-zinc-700 px-2 rounded-lg py-1 text-xs font-semibold">8</p> */}
            </section>
            <section className="flex items-start">
              <Link
                href="/trainings?filter=completed"
                className={`border-b-transparent border-b-4 font-medium text-zinc-200 pb-3 px-2`}
              >
                Completed
              </Link>
              {/* <p className="bg-zinc-700 px-2 rounded-lg py-1 text-xs font-semibold">11</p> */}
            </section>
          </div>
        </section>
      </header>
      <div className="py-12 px-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 gap-x-5 md:gap-y-14 lg:gap-y-14 xl:gap-y-14">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <TrainingCardLoader key={index} />
        ))}
      </div>
    </div>
  );
}
