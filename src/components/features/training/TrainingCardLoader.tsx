import { FunctionComponent } from "react";

export const TrainingCardLoader: FunctionComponent = () => {
  return (
    <div>
      <div className="h-32 rounded-lg dark:bg-zinc-700 animate-pulse mb-5" />
      <div className="flex items-center gap-2">
        <div className="w-11 h-11 dark:bg-zinc-700 rounded-full animate-pulse shrink-0" />
        <div className="w-full space-y-2">
          <div className="w-full h-3 dark:bg-zinc-700 animate-pulse" />
          <div className="w-1/3 h-3 dark:bg-zinc-700 animate-pulse" />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="w-full h-3 dark:bg-zinc-700 animate-pulse" />
        <div className="w-1/2 h-3 dark:bg-zinc-700 animate-pulse" />
      </div>

      <div className="w-1/4 h-3 dark:bg-zinc-700 animate-pulse mt-4" />
    </div>
  );
};
