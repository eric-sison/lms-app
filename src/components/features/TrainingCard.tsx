"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, createContext, useContext } from "react";
import { useSliderOver } from "../primitives/SliderOver";

type TrainingCardProps = {
  image?: string;
  title: string;
  details?: string;
  tag: string;
  source: string;
};

type TrainingCardContextState = Pick<TrainingCardProps, "source" | "title">;

const TrainingCardContext = createContext<TrainingCardContextState>({ source: "", title: "" });

export const TrainingCard: FunctionComponent<TrainingCardProps> = ({
  image,
  title,
  details,
  tag,
  source,
}) => {
  const { setOpen } = useSliderOver();

  return (
    <div className="border border-zinc-200 bg-white dark:border-zinc-700/50 rounded-lg dark:bg-dark-secondary overflow-clip shadow-2xl shadow-zinc-200 dark:shadow-zinc-900">
      <header className="h-52 border-b border-b-zinc-100 group dark:border-b-zinc-700 overflow-clip relative">
        <TrainingCardContext.Provider value={{ title, source }}>
          <TrainingCardImageOverlay />
        </TrainingCardContext.Provider>

        <Image
          src={image ?? ""}
          alt="card-image"
          width={500}
          height={500}
          className="inline-block h-full w-full rounded-t-lg object-cover shrink-0 group-hover:scale-150 transition-all duration-1000 ease-out"
        />
      </header>

      <div className="px-5 pt-4 pb-7 space-y-4">
        <section>
          <span className="bg-zinc-600 dark:bg-zinc-600/60 px-2 py-1 font-medium rounded-sm text-xs text-zinc-200">
            {tag}
          </span>
        </section>

        <section>
          <p className="text-zinc-600 dark:text-zinc-300/90 leading-6 line-clamp-3 lg:line-clamp-2 xl:line-clamp-2 mb-1">
            {details}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="text-indigo-500 text-sm text-right border-b border-b-indigo-500"
          >
            Show details
          </button>
        </section>

        {/* <section className="text-xs text-zinc-400 space-y-1">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M16.272 10.272a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                <path d="M5.794 16.518a9 9 0 1 1 12.724-.312l-6.206 6.518l-6.518-6.206Zm11.276-1.691l-4.827 5.07l-5.07-4.827a7 7 0 1 1 9.897-.243Z" />
              </g>
            </svg>
            <p>Training Hall</p>
          </div>

          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <g fill="currentColor">
                <path d="M8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Z"></path>
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
            <p>Aug 24 - 25, 2023</p>
          </div>

          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <g fill="currentColor">
                <path d="M9 7h2v5h5v2H9V7Z"></path>
                <path
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
            <p>8:00AM - 5:00PM</p>
          </div>
        </section> */}
      </div>
    </div>
  );
};

const TrainingCardImageOverlay = () => {
  const { source, title } = useContext(TrainingCardContext);

  return (
    <div className="h-full w-full z-20 bg-gradient-to-t from-zinc-700/70 dark:from-zinc-950/90 bg-opacity-20 absolute transition-colors duration-100 flex flex-col justify-between items-end">
      <div className="pt-2 pr-4">
        <span
          className={`${
            source === "Internal" ? "bg-green-500" : "bg-orange-500"
          } font-semibold text-xs tracking-wider px-1 rounded-sm text-white`}
        >
          {source}
        </span>
      </div>

      <section className="p-4 w-full">
        <Link
          href="/"
          className="text-xl font-bold leading-6 hover:underline text-white dark:text-zinc-200 line-clamp-3 lg:line-clamp-2 xl:line-clamp-2"
        >
          {title}
        </Link>
      </section>
    </div>
  );
};
