"use client";

import { FunctionComponent } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTrainingSourceFilterStore } from "@lms/utils/zustand/trainingSrcStore";

export const TrainingSourceDropdownMenu: FunctionComponent = () => {
  const setSource = useTrainingSourceFilterStore((state) => state.setSource);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none focus:ring-4 focus:ring-indigo-500 dark:bg-indigo-700 px-5 py-2 rounded flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.953 2.25h14.094c.667 0 1.237 0 1.693.057c.483.061.95.198 1.334.558c.39.367.545.824.613 1.299c.063.437.063.98.063 1.6v.776c0 .489 0 .91-.036 1.263c-.04.38-.125.735-.331 1.076c-.205.339-.48.585-.798.805c-.299.208-.68.423-1.13.676l-2.942 1.656c-.67.377-.903.513-1.059.648c-.357.31-.562.655-.658 1.086c-.041.185-.046.417-.046 1.123v2.732c0 .901 0 1.666-.093 2.255c-.098.625-.327 1.225-.927 1.6c-.587.367-1.232.333-1.86.184c-.605-.143-1.35-.435-2.244-.784l-.086-.034c-.42-.164-.786-.307-1.076-.457c-.312-.161-.602-.361-.823-.673c-.225-.316-.314-.654-.355-1c-.036-.315-.036-.693-.036-1.115v-2.708c0-.706-.004-.938-.046-1.123a1.933 1.933 0 0 0-.658-1.086c-.156-.135-.39-.271-1.059-.648L3.545 10.36c-.45-.253-.831-.468-1.13-.676c-.318-.22-.593-.466-.798-.805c-.206-.341-.291-.697-.33-1.076c-.037-.352-.037-.774-.037-1.263v-.776c0-.62 0-1.163.063-1.6c.068-.475.223-.932.613-1.299c.384-.36.85-.497 1.334-.558c.456-.057 1.026-.057 1.693-.057ZM3.448 3.796c-.334.042-.44.11-.495.163c-.05.046-.114.127-.156.418c-.045.318-.047.752-.047 1.438v.69c0 .534 0 .878.028 1.144c.026.247.07.366.124.455c.055.091.147.194.368.348c.234.162.553.343 1.04.617l2.913 1.64l.08.045c.56.315.94.529 1.226.777a3.43 3.43 0 0 1 1.14 1.893c.081.367.081.78.081 1.36v2.759c0 .472.001.762.027.98c.022.198.059.265.086.304c.03.042.09.107.289.21c.212.109.505.224.967.405c.961.376 1.608.627 2.097.743c.479.114.637.055.718.004c.068-.043.173-.13.242-.563c.072-.457.074-1.103.074-2.084v-2.758c0-.58 0-.993.082-1.36a3.43 3.43 0 0 1 1.139-1.893c.286-.248.667-.463 1.225-.777l.081-.045l2.913-1.64c.487-.274.806-.455 1.04-.617c.221-.154.313-.257.368-.348c.054-.089.098-.208.123-.455c.028-.266.029-.61.029-1.145v-.69c0-.685-.002-1.12-.047-1.437c-.042-.291-.107-.372-.155-.418c-.056-.052-.162-.121-.496-.163c-.35-.045-.825-.046-1.552-.046H5c-.727 0-1.201.001-1.552.046Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="font-medium">Filter</p>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={10}
          className="dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl w-60 overflow-clip p-2 space-y-2"
        >
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger
              role="button"
              className="px-3 py-2 flex items-center justify-between outline-none hover:dark:bg-zinc-700/50 focus:dark:bg-zinc-700 rounded-md"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="text-amber-500 shrink-0"
                >
                  <g fill="currentColor">
                    <path
                      d="M1 13.529c0-4.667 0-7 1.45-8.45c1.45-1.45 3.783-1.45 8.45-1.45s7 0 8.45 1.45c1.45 1.45 1.45 3.783 1.45 8.45s0 7-1.45 8.45c-1.45 1.45-3.783 1.45-8.45 1.45s-7 0-8.45-1.45C1 20.53 1 18.196 1 13.53Z"
                      opacity=".5"
                    ></path>
                    <path d="m17.67 1.907l2.593 2.248c1.785 1.546 2.678 2.32 2.678 3.325c0 1.004-.893 1.778-2.678 3.325l-2.593 2.247c-.785.68-1.177 1.02-1.498.873c-.322-.146-.322-.666-.322-1.704v-1.677c-2.65 0-5.477.988-7.2 2.7c-.525.52-.788.781-.927.715c-.14-.066-.107-.403-.042-1.076c.648-6.721 5.061-8.468 8.169-8.468V2.74c0-1.04 0-1.558.322-1.705c.321-.147.713.193 1.498.873Z"></path>
                  </g>
                </svg>
                <p> Training Source</p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className="dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl w-52 z-20 p-2">
                <DropdownMenu.Item
                  role="button"
                  onClick={() => setSource("all")}
                  className="px-4 py-2 hover:dark:bg-zinc-700/50 focus:dark:bg-zinc-700 rounded-md outline-none"
                >
                  All Trainings
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  role="button"
                  onClick={() => setSource("internal")}
                  className="px-4 py-2 hover:dark:bg-zinc-700/50 focus:dark:bg-zinc-700 rounded-md outline-none"
                >
                  Internal
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  role="button"
                  onClick={() => setSource("external")}
                  className="px-4 py-2 hover:dark:bg-zinc-700/50 focus:dark:bg-zinc-700 rounded-md outline-none"
                >
                  External
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger
              role="button"
              className="px-3 py-2 flex items-center justify-between outline-none hover:dark:bg-zinc-700/50 focus:dark:bg-zinc-700 rounded-md"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="text-teal-500 shrink-0"
                >
                  <g fill="currentColor">
                    <path d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972c.697-.67 1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724Z"></path>
                    <path
                      d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828C4.343 22 6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172C22 19.657 22 17.771 22 14Z"
                      opacity=".5"
                    ></path>
                  </g>
                </svg>
                <p>Training Date</p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className="dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl w-40 z-20 p-2">
                <DropdownMenu.Item
                  role="button"
                  className="px-4 py-2 hover:dark:bg-zinc-700/50 focus:dark:bg-zinc-700 rounded-md outline-none"
                >
                  Exact
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  role="button"
                  className="px-4 py-2 hover:dark:bg-zinc-700/50 focus:dark:bg-zinc-700 rounded-md outline-none"
                >
                  Range
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
