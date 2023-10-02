import { TrainingCardLoader } from "@lms/components/features/training/TrainingCardLoader";

export default function LoadTrainingPage() {
  return (
    <div>
      <header className="h-[5rem] border-b dark:border-b-zinc-700 flex flex-col px-10">
        <section className="flex-1">
          <div className="h-full flex items-end space-x-5">
            <section className="flex items-start">
              <div className="h-5 w-32 dark:bg-zinc-700 animate-pulse mb-3 rounded" />
            </section>
            <section className="flex items-start">
              <div className="h-5 w-32 dark:bg-zinc-700 animate-pulse mb-3 rounded" />
            </section>
            <section className="flex items-start">
              <div className="h-5 w-32 dark:bg-zinc-700 animate-pulse mb-3 rounded" />
            </section>
            <section className="flex items-start">
              <div className="h-5 w-32 dark:bg-zinc-700 animate-pulse mb-3" />
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
