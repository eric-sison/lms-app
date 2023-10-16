"use client";

import { FunctionComponent, useEffect, useState } from "react";
import { AddFolderModal } from "./AddFolderModal";
import { useLmsClient } from "@lms/components/providers/MyLmsClientProvider";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const TrainingMaterialsSidebar: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);

  const currentTab = useSearchParams().get("pos");

  const lmsCLient = useLmsClient();

  const { data: folders } = useQuery({
    queryKey: ["find-all-folders"],
    queryFn: async () => {
      return await lmsCLient.trainingRoutes().getAllBuckets();
    },
  });

  useEffect(() => {
    if (folders) {
      setSelectedItem(0);
    }
  }, [folders]);

  return (
    <>
      <AddFolderModal open={open} setOpen={setOpen} />
      <aside className="h-full w-[22rem] shrink-0 px-4 border-r dark:border-r-zinc-700/50 dark:bg-zinc-900/30">
        <header className="mt-5 gap-3 dark:bg-green-700 rounded-md">
          {folders?.length !== 0 && (
            <>
              <button
                title="Add new folder"
                className="flex items-center gap-3 w-full py-2 px-3"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  // className="dark:text-zinc-400"
                >
                  <path
                    fill="currentColor"
                    d="M2 4.5V6h3.586a.5.5 0 0 0 .353-.146L7.293 4.5L5.939 3.146A.5.5 0 0 0 5.586 3H3.5A1.5 1.5 0 0 0 2 4.5Zm-1 0A2.5 2.5 0 0 1 3.5 2h2.086a1.5 1.5 0 0 1 1.06.44L8.207 4H12.5A2.5 2.5 0 0 1 15 6.5v.757a5.507 5.507 0 0 0-1-.657v-.1A1.5 1.5 0 0 0 12.5 5H8.207l-1.56 1.56A1.5 1.5 0 0 1 5.585 7H2v4.5A1.5 1.5 0 0 0 3.5 13h2.707c.099.349.23.683.393 1H3.5A2.5 2.5 0 0 1 1 11.5v-7Zm15 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"
                  ></path>
                </svg>
                <p className="font-medium text-lg">Add New Folder</p>
              </button>
            </>
          )}
        </header>

        <main className="mt-7">
          {folders?.length === 0 ? (
            <div className="w-full flex justify-center pt-40">
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5em"
                  height="5em"
                  viewBox="0 0 256 256"
                  className="dark:text-zinc-700"
                >
                  <g fill="currentColor">
                    <path
                      d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6l27.74 20.8a8 8 0 0 0 4.8 1.6H216a8 8 0 0 1 8 8Z"
                      opacity=".2"
                    ></path>
                    <path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16Zm0 128H40V64h53.33l27.74 20.8a16.12 16.12 0 0 0 9.6 3.2H216Z"></path>
                  </g>
                </svg>
                <button
                  onClick={() => setOpen(true)}
                  className="dark:text-indigo-500/70 text-2xl font-semibold"
                >
                  Add Folder
                </button>
              </div>
            </div>
          ) : (
            <ul className="space-y-2">
              {folders?.map((folder, index) => (
                <Link
                  href={`/trainings/details?pos=${currentTab}&bucket-id=${folder.id}`}
                  key={index}
                  role="button"
                  className={`${
                    selectedItem === index ? "dark:bg-zinc-700/50" : ""
                  } dark:hover:dark:bg-zinc-700/50 flex items-center gap-3 px-4 py-2 rounded`}
                  onClick={() => setSelectedItem(index)}
                >
                  {selectedItem === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.75em"
                      height="1.75em"
                      viewBox="0 0 256 256"
                      className="dark:text-indigo-500 flex-shrink-0"
                    >
                      <path
                        fill="currentColor"
                        d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42ZM93.34 64l27.73 20.8a16.12 16.12 0 0 0 9.6 3.2H200v16h-53.57a16 16 0 0 0-8.88 2.69l-20 13.31H69.42a15.94 15.94 0 0 0-14.86 10.06L40 166.46V64Z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.75em"
                      height="1.75em"
                      viewBox="0 0 256 256"
                      className="dark:text-indigo-500 flex-shrink-0"
                    >
                      <path
                        fill="currentColor"
                        d="M216 72h-85.34l-27.74-20.8a16 16 0 0 0-9.58-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16ZM40 64h53.34l21.33 16l-21.34 16H40Z"
                      ></path>
                    </svg>
                  )}

                  <span className="text-xl font-medium dark:text-zinc-200 truncate">
                    {folder.name}
                  </span>
                </Link>
              ))}
            </ul>
          )}
        </main>
      </aside>
    </>
  );
};
