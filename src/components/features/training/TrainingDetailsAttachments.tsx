import { FunctionComponent } from "react";

export const TrainingDetailsAttachments: FunctionComponent = () => {
  return (
    <div className="mt-10 space-y-2 max-w-7xl">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-medium">Attachments</h3>
      </div>

      <div className="w-full h-52 dark:border-zinc-700 py-4 flex items-start gap-3 overflow-x-auto overflow-y-hidden">
        <div className="flex items-center gap-1 dark:bg-zinc-900 py-2 pl-1 pr-6 rounded-lg max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-16 h-16 dark:text-red-700 shrink-0"
          >
            <path
              d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.1 9.4c-.02.04-.29 1.76-2.1 4.69c0 0-3.5 1.82-2.67 3.18c.67 1.08 2.32-.04 3.74-2.68c0 0 1.82-.64 4.24-.82c0 0 3.86 1.73 4.39-.11c.52-1.86-3.06-1.44-3.7-1.25c0 0-2-1.35-2.5-3.21c0 0 1.14-3.95-.61-3.9c-1.75.05-1.09 3.13-.79 4.1m.81 1.04c.03.01.47 1.21 1.89 2.46c0 0-2.33.46-3.39.9c0 0 1-1.73 1.5-3.36m3.93 2.72c.58-.16 2.33.15 2.26.48c-.06.33-2.26-.48-2.26-.48M7.77 17c-.53 1.24-1.44 2-1.67 2c-.23 0 .7-1.6 1.67-2m3.14-6.93c0-.07-.36-2.2 0-2.15c.54.08 0 2.08 0 2.15z"
              fill="currentColor"
            ></path>
          </svg>

          <div>
            <h3 className="font-medium text-xl dark:text-zinc-300 truncate max-w-xs">
              the_quick_brown_fox_jumps_over_a_lazy_dog_near_the_riverbanks.pdf
            </h3>
            <p className="dark:text-zinc-500">217.53 KiB</p>
          </div>
        </div>
      </div>
    </div>
  );
};
