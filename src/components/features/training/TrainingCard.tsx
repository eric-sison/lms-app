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

export const TrainingCard: FunctionComponent<TrainingCardProps> = ({ training }) => {
  const { image, title, source, details, tag } = training;

  return (
    <div className="group max-w-full xl:max-w-xl border-zinc-200 bg-white rounded-lg dark:bg-transparent overflow-clip">
      <header className="h-32 border-b border-b-zinc-100 group dark:border-b-transparent overflow-clip relative rounded-lg">
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
          <div className="pt-5 flex items-start gap-3">
            <Image
              src="/profile/default.jpeg"
              alt=""
              width={200}
              height={200}
              className="h-12 w-12 rounded-full shrink-0 object-cover"
            />
            <div className="space-y-2">
              <section className="pb-1">
                <span className="bg-zinc-600 dark:bg-zinc-600/60 px-2 py-1 font-medium rounded-sm text-md text-zinc-200">
                  {tag}
                </span>
              </section>

              <div className="space-y-1">
                <Link
                  title={title}
                  href="/trainings/details"
                  className="text-xl font-bold leading-6 hover:underline text-white dark:text-zinc-200 line-clamp-2 pr-3"
                >
                  {title}
                </Link>

                <TrainingCardScheduleDetails />
              </div>
            </div>
          </div>

          {/* <TrainingCardScheduleDetails /> */}

          {/* <div className="space-y-2">
            <section className="pb-1">
              <span className="bg-zinc-600 dark:bg-zinc-600/60 px-2 py-1 font-medium rounded-sm text-xs text-zinc-200">
                {tag}
              </span>
            </section>
            <p className="text-zinc-600 dark:text-zinc-300/80 leading-6 line-clamp-3 lg:line-clamp-2 xl:line-clamp-2 mb-1">
              {details}
            </p>
            <button className="text-indigo-500 text-sm border-b border-transparent hover:border-b-indigo-500">
              Show details
            </button>
          </div> */}
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
        <span className="bg-zinc-900 font-medium text-sm tracking-wider py-1 px-2 rounded-md text-white">
          {source}
        </span>
      </div>
    </div>
  );
};

const TrainingCardScheduleDetails = () => {
  return (
    <section className="text-md dark:text-zinc-100 flex gap-2">
      {/* <div className="flex items-center gap-2 max-w-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="dark:text-zinc-400"
        >
          <path
            fill="currentColor"
            d="m15.99 4.95l.53-.53l-.53.53Zm3.082 3.086l-.531.53l.53-.53ZM8.738 19.429l-.53.53l.53-.53Zm-4.116-4.12l.53-.53l-.53.53Zm12.945-.315l-.264-.702l.264.702Zm-1.917.72l.264.703l-.264-.702ZM8.332 8.383l-.704-.258l.704.258Zm.695-1.896l.704.258l-.704-.258Zm-3.182 4.188l.2.723l-.2-.723Zm1.457-.539l-.439-.609l.439.61Zm.374-.345l.57.487l-.57-.487Zm6.575 6.59l.491.568l-.491-.567Zm-.87 1.821l-.724-.199l.724.2Zm.536-1.454l-.61-.438l.61.438ZM2.718 12.755l-.75.005l.75-.005Zm.212-.803l-.65-.374l.65.374Zm8.375 9.391l.001-.75v.75Zm.788-.208l-.371-.652l.371.652Zm-.396-19.099l.162.732l-.162-.732ZM1.47 21.47a.75.75 0 0 0 1.062 1.06L1.47 21.47Zm5.715-3.598a.75.75 0 0 0-1.061-1.06l1.06 1.06ZM15.459 5.48l3.082 3.086l1.061-1.06L16.52 4.42l-1.061 1.06ZM9.269 18.9l-4.117-4.12l-1.06 1.06l4.116 4.12l1.061-1.06Zm8.034-4.607l-1.917.72l.528 1.405l1.917-.72l-.528-1.405ZM9.036 8.64l.695-1.896l-1.409-.516l-.694 1.896l1.408.516Zm-2.992 2.756c.712-.196 1.253-.334 1.696-.652l-.877-1.218c-.172.125-.397.198-1.217.424l.398 1.447Zm1.584-3.272c-.293.8-.385 1.018-.523 1.18l1.142.973c.353-.415.535-.944.79-1.637l-1.409-.516Zm.112 2.62c.187-.135.357-.292.507-.467l-1.142-.973a1.365 1.365 0 0 1-.242.222l.877 1.218Zm7.646 4.268c-.689.26-1.214.445-1.626.801l.982 1.135c.16-.14.377-.233 1.172-.531l-.528-1.405ZM14.104 18.4c.225-.819.298-1.043.422-1.216l-1.219-.875c-.317.443-.454.983-.65 1.693l1.447.398Zm-.344-2.586c-.17.146-.322.313-.453.495l1.22.875c.062-.087.134-.167.215-.236l-.982-1.135Zm-8.608-1.036c-.646-.647-1.084-1.087-1.368-1.444c-.286-.359-.315-.514-.316-.583l-1.5.009c.004.582.293 1.07.642 1.508c.35.44.861.95 1.481 1.57l1.061-1.06Zm.494-4.828c-.846.234-1.542.424-2.063.634c-.52.208-1.012.49-1.302.994l1.3.748c.034-.06.136-.18.56-.35c.424-.17 1.022-.337 1.903-.58L5.646 9.95Zm-2.178 2.8a.84.84 0 0 1 .112-.424l-1.3-.748a2.34 2.34 0 0 0-.312 1.182l1.5-.01Zm4.74 7.21c.624.624 1.137 1.139 1.578 1.49c.441.352.932.642 1.518.643l.002-1.5c-.07 0-.225-.029-.585-.316c-.36-.286-.802-.727-1.452-1.378l-1.061 1.06Zm4.45-1.958c-.245.888-.412 1.49-.583 1.917c-.172.428-.293.53-.353.564l.743 1.303c.509-.29.792-.786 1.002-1.309c.21-.524.402-1.225.637-2.077l-1.447-.398Zm-1.354 4.091c.407 0 .807-.105 1.161-.307l-.743-1.303a.835.835 0 0 1-.416.11l-.002 1.5Zm7.237-13.527c1.064 1.064 1.8 1.803 2.25 2.413c.444.598.495.917.441 1.167l1.466.317c.19-.878-.16-1.647-.701-2.377c-.534-.72-1.366-1.551-2.395-2.58l-1.061 1.06Zm-.71 7.13c1.361-.511 2.463-.923 3.246-1.358c.795-.44 1.431-.996 1.621-1.875l-1.466-.317c-.054.25-.232.52-.883.88c-.663.369-1.638.737-3.046 1.266l.528 1.404ZM16.52 4.42c-1.036-1.037-1.872-1.876-2.595-2.414c-.734-.544-1.508-.897-2.39-.702l.324 1.464c.25-.055.569-.005 1.171.443c.613.455 1.358 1.197 2.429 2.27l1.061-1.06ZM9.73 6.744c.522-1.423.886-2.41 1.251-3.08c.36-.66.628-.84.878-.896l-.323-1.464c-.882.194-1.435.84-1.872 1.642c-.431.792-.837 1.906-1.342 3.282l1.409.516ZM2.53 22.53l4.654-4.658l-1.061-1.06l-4.654 4.658l1.062 1.06Z"
          ></path>
        </svg>

        <p className="truncate dark:text-zinc-400 max-w-[8rem]">Training Hall</p>
      </div>

      <p className="dark:text-zinc-600">|</p> */}

      <div className="flex items-center gap-2 max-w-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="dark:text-zinc-400"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827c.26.02.506.045.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.05.375.084.784.107 1.23a.747.747 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46c.022-.445.056-.854.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c.233-.031.48-.056.739-.076V2.5A.75.75 0 0 1 7 1.75Zm-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25H2.763Zm18.405-1.5H2.832c.016-.19.035-.369.058-.54c.135-1.005.389-1.585.812-2.008c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812c.423.423.677 1.003.812 2.009c.023.17.042.35.058.539Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="dark:text-zinc-400 w-fit font-medium">Aug 24 - 25, 2023</p>
      </div>
    </section>
  );
};
