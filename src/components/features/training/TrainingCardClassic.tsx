"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, createContext, useContext, useEffect } from "react";
import { Training } from "@lms/types/training";

type TrainingCardProps = {
  training: Training;
};

type TrainingCardContextState = Pick<Training, "source">;

const TrainingCardContext = createContext<TrainingCardContextState>({ source: "" });

export const TrainingCardClassic: FunctionComponent<TrainingCardProps> = ({
  training,
}) => {
  const { image, title, source, details, tag } = training;

  return (
    <div className="group max-w-full xl:max-w-xl border-zinc-200 bg-white dark:border-transparent rounded-lg dark:bg-transparent overflow-clip">
      <header className="h-32 border-b border-b-zinc-100 group dark:border-b-transparent overflow-clip relative">
        <TrainingCardContext.Provider value={{ source }}>
          <TrainingCardImageOverlay />
        </TrainingCardContext.Provider>

        <Image
          priority={true}
          quality={50}
          src={image ?? ""}
          alt="card-image"
          width={450}
          height={450}
          className="inline-block h-full w-full rounded-lg object-cover shrink-0 group-hover:scale-150 transition-all duration-1000 ease-out"
        />
      </header>

      <div className="pb-5 space-y-3">
        <section className="space-y-4">
          <div className="pt-5 flex items-center gap-3">
            <Image
              src="/profile/default.jpeg"
              alt=""
              width={200}
              height={200}
              className="h-11 w-11 rounded-full shrink-0 object-cover"
            />
            <Link
              title={title}
              href="/trainings/details"
              className="text-xl font-bold leading-6 hover:underline text-white dark:text-zinc-200 line-clamp-2"
            >
              {title}
            </Link>
          </div>

          <TrainingCardScheduleDetails />

          <div className="space-y-2">
            <section className="pb-1">
              <span className="bg-zinc-600 dark:bg-zinc-600/60 px-2 py-1 font-medium rounded-sm text-xs text-zinc-200">
                {tag}
              </span>
            </section>
            <p className="text-zinc-600 dark:text-zinc-300/80 leading-5 font-medium line-clamp-3 lg:line-clamp-2 xl:line-clamp-2 mb-1">
              {details}
            </p>
            <button className="text-indigo-500 text-sm border-b border-transparent hover:border-b-indigo-500">
              Show details
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

const TrainingCardImageOverlay = () => {
  const { source } = useContext(TrainingCardContext);

  return (
    <div className="h-full w-full z-20 bg-gradient-to-t from-zinc-700/70 dark:from-zinc-800/50 absolute transition-colors duration-100 flex flex-col justify-between items-end">
      <div className="pt-4 pr-4">
        <span
          className={`${
            source === "Internal" ? "bg-blue-500" : "bg-orange-500"
          } font-medium text-sm tracking-wider py-1 px-2 rounded-sm text-white`}
        >
          {source}
        </span>
      </div>
    </div>
  );
};

const TrainingCardScheduleDetails = () => {
  return (
    <section className="text-xs dark:text-zinc-100 flex justify-between px-2">
      <div className="flex items-center gap-1 max-w-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 24 24"
          className="text-rose-500"
        >
          <path
            fill="currentColor"
            d="M19.183 7.805L16.22 4.838c-2.027-2.03-3.04-3.043-4.129-2.803c-1.088.24-1.581 1.587-2.568 4.28l-.668 1.823c-.263.718-.395 1.077-.632 1.355a2.035 2.035 0 0 1-.36.332c-.296.213-.664.314-1.4.517c-1.66.458-2.491.687-2.804 1.23a1.528 1.528 0 0 0-.204.773c.004.627.613 1.236 1.83 2.455L6.7 16.216l-4.476 4.48a.764.764 0 0 0 1.08 1.08l4.475-4.48l1.466 1.468c1.226 1.226 1.839 1.84 2.47 1.84c.265 0 .526-.068.757-.2c.548-.313.778-1.149 1.239-2.822c.202-.735.303-1.102.515-1.399c.093-.129.201-.247.322-.352c.275-.238.632-.372 1.345-.64l1.844-.693c2.664-1 3.996-1.501 4.23-2.586c.235-1.086-.77-2.093-2.783-4.107Z"
          ></path>
        </svg>
        <p className="truncate">Training Hall</p>
      </div>

      <p className="dark:text-zinc-600">|</p>

      <div className="flex items-center gap-1 max-w-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 24 24"
          className="text-sky-500"
        >
          <path
            fill="currentColor"
            d="M22 14v-2c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14ZM7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z"
          ></path>
        </svg>
        <p className="truncate">Aug 24 - 25, 2023</p>
      </div>

      <p className="dark:text-zinc-600">|</p>

      <div className="flex items-center gap-1 max-w-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 24 24"
          className="text-orange-500"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm.75-14a.75.75 0 0 0-1.5 0v4c0 .199.079.39.22.53l2.5 2.5a.75.75 0 1 0 1.06-1.06l-2.28-2.28V8Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="truncate">8:00 - 5:00</p>
      </div>
    </section>
  );
};
