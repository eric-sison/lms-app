"use client";

import { Transition, Dialog } from "@headlessui/react";
import { useLmsClient } from "@lms/components/providers/MyLmsClientProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, FunctionComponent, useState } from "react";

type AddFolderModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const AddFolderModal: FunctionComponent<AddFolderModalProps> = ({
  open,
  setOpen,
}) => {
  const [folderName, setFolderName] = useState("");

  const lmsClient = useLmsClient();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["add-folder"],
    mutationFn: async (folder: { name: string }) => {
      await axios.post("http://localhost:3001/api/v1/trainings/bucket", folder);
    },
    onSuccess: async () => {
      const updatedBuckets = await lmsClient.trainingRoutes().getAllBuckets();
      queryClient.setQueryData(["find-all-folders"], updatedBuckets);
    },
  });

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[28rem] transform overflow-hidden rounded-lg dark:bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all border dark:border-zinc-700">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 dark:text-zinc-200"
                  >
                    Add Folder
                  </Dialog.Title>
                  <p className="dark:text-zinc-400">
                    Create folder to organize your files
                  </p>
                  <div className="mt-10 space-y-2">
                    <label htmlFor="folder-name" className="ml-1 dark:text-zinc-200">
                      Folder name
                    </label>
                    <input
                      id="folder-name"
                      placeholder="Untitled folder"
                      value={folderName}
                      onChange={(e) => setFolderName(e.target.value)}
                      className="dark:bg-zinc-800 border dark:border-zinc-700 w-full outline-none px-4 py-2 rounded focus:border-indigo-500 dark:text-zinc-200"
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-2 justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-700 px-4 py-2 text-sm font-medium text-indigo-100  focus:outline-none"
                      onClick={async () => {
                        setOpen(false);
                        setFolderName("");
                        mutation.mutate({ name: folderName });
                      }}
                    >
                      Create
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
