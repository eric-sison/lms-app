"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Client, Storage } from "appwrite";
import { useSearchParams } from "next/navigation";
import { Fragment, FunctionComponent, createContext, useContext, useState } from "react";
import { FileThumbnail } from "./Thumbnail";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

type UploadFilesModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type FileToUploadCardProps = {
  file: File;
  fileId: number;
};

type FilesToUploadContextState = {
  filesToUpload: File[];
  setFilesToUpload: (files: File[]) => void;
};

const FilesToUploadContext = createContext({} as FilesToUploadContextState);

const client = new Client()
  .setEndpoint("http://localhost:8001/v1")
  .setProject("650bcf0779174ca1a5ae");

const storage = new Storage(client);

export const UploadFilesModal: FunctionComponent<UploadFilesModalProps> = ({
  open,
  setOpen,
}) => {
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

  const bucketId = useSearchParams().get("bucket-id") as string;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["add-file"],
    mutationFn: async (file: File) => {
      await storage.createFile(bucketId, uuidv4(), file);
    },
    onSuccess: async () => {
      const updatedFiles = await storage.listFiles(bucketId);
      // console.log("before update", updatedFiles);
      const newFiles = queryClient.setQueryData(["get-files", bucketId], updatedFiles);
      // console.log("after update", newFiles);
      //console.log(queryClient.getQueryData(["get-files", bucketId]));

      console.log(newFiles);
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full justify-center p-10 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[40rem] transform overflow-hidden rounded-lg dark:bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all border dark:border-zinc-700">
                  <header className="space-y-1">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 dark:text-zinc-200"
                    >
                      Upload Files
                    </Dialog.Title>
                    <p className="dark:text-zinc-400 text-lg">
                      Add new files into this folder
                    </p>
                  </header>

                  <div className="mt-10 space-y-7">
                    <div className="h-40 relative dark:bg-zinc-700/20 w-full border-[5px] dark:border-zinc-700 border-dashed rounded-xl flex flex-col gap-2 items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3em"
                        height="3em"
                        viewBox="0 0 1024 1024"
                        className="text-indigo-500"
                      >
                        <path
                          fill="currentColor"
                          d="M763.024 259.968C718.4 141.536 622.465 66.527 477.553 66.527c-184.384 0-313.392 136.912-324.479 315.536C64.177 410.495.002 501.183.002 603.903c0 125.744 98.848 231.968 215.823 231.968h92.448c17.664 0 32-14.336 32-32c0-17.68-14.336-32-32-32h-92.448c-82.304 0-152.832-76.912-152.832-167.968c0-80.464 56.416-153.056 127.184-165.216l29.04-5.008l-2.576-29.328l-.24-.368c0-155.872 102.576-273.44 261.152-273.44c127.104 0 198.513 62.624 231.537 169.44l6.847 22.032l23.056.496c118.88 2.496 223.104 98.945 223.104 218.77c0 109.055-72.273 230.591-181.696 230.591h-73.12c-17.664 0-32 14.336-32 32c0 17.68 14.336 32 32 32l72.88-.095c160-4.224 243.344-157.071 243.344-294.495c0-147.712-115.76-265.744-260.48-281.312zM535.985 514.941c-.176-.192-.241-.352-.354-.512l-8.095-8.464c-4.432-4.688-10.336-7.008-16.24-6.976c-5.905-.048-11.777 2.288-16.289 6.975l-8.095 8.464c-.16.16-.193.353-.336.513L371.072 642.685c-8.944 9.344-8.944 24.464 0 33.84l8.064 5.471c8.945 9.344 23.44 6.32 32.368-3.024l68.113-75.935v322.432c0 17.664 14.336 32 32 32s32-14.336 32-32V603.34l70.368 77.631c8.944 9.344 23.408 12.369 32.336 3.025l8.064-5.472c8.945-9.376 8.945-24.496 0-33.84z"
                        ></path>
                      </svg>
                      <input
                        type="file"
                        className="absolute h-full w-full cursor-pointer opacity-0"
                        multiple
                        onChange={(e) => {
                          if (e.target.files?.length === 0) {
                            console.log("cancelled");
                          } else if (e.target.files) {
                            const files = [...filesToUpload];
                            files.push(e.target.files[0]);
                            setFilesToUpload(files);
                          }
                        }}
                      />
                      <h3 className="text-xl dark:text-zinc-200 select-none">
                        Choose a file to upload
                      </h3>
                    </div>

                    <div className="h-[30rem] overflow-y-auto p-5 dark:bg-zinc-900/30 rounded-xl">
                      {filesToUpload.length === 0 ? (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10em"
                            height="10em"
                            viewBox="0 0 20 20"
                            className="dark:text-zinc-700"
                          >
                            <path
                              fill="currentColor"
                              d="M6 2a2 2 0 0 0-2 2v5.207a5.48 5.48 0 0 1 1-.185V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3.6a5.507 5.507 0 0 1-.657 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5Z"
                            ></path>
                          </svg>
                          <h3 className="text-3xl dark:text-zinc-600 font-semibold">
                            No files selected
                          </h3>
                        </div>
                      ) : (
                        <FilesToUploadContext.Provider
                          value={{ filesToUpload, setFilesToUpload }}
                        >
                          <div className="space-y-2 w-full">
                            {filesToUpload.map((file, index) => (
                              <FileToUploadCard key={index} file={file} fileId={index} />
                            ))}
                          </div>
                        </FilesToUploadContext.Provider>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex justify-end">
                    <button
                      onClick={() => {
                        filesToUpload.map(async (file) => {
                          // await storage.createFile(bucketId, nanoid(20), file);
                          mutation.mutate(file);
                        });

                        setOpen(false);
                        setFilesToUpload([]);
                      }}
                      className="dark:bg-indigo-700 px-4 py-2 rounded text-lg font-medium dark:text-zinc-200"
                    >
                      Save files
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

const FileToUploadCard: FunctionComponent<FileToUploadCardProps> = ({ file }) => {
  const { filesToUpload, setFilesToUpload } = useContext(FilesToUploadContext);

  return (
    <div className="flex items-center dark:bg-zinc-900 w-full h-20 rounded-lg">
      <div className="w-16 h-16 p-3">
        <FileThumbnail mimeType={file.type} />
      </div>

      <div className="flex items-center justify-between w-full pr-5">
        <div>
          <h3 className="truncate max-w-sm font-semibold dark:text-zinc-300">
            {file?.name}
          </h3>
          <p className="dark:text-zinc-500 truncate font-medium">
            {file?.size / 1000} KiB
          </p>
        </div>

        <button
          onClick={() => {
            const index = filesToUpload.findIndex(
              (element) => element.name === file?.name
            );
            const updatedFiles = [...filesToUpload];
            //updatedFiles.splice(1, index);

            updatedFiles.splice(index, 1);

            setFilesToUpload(updatedFiles);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="dark:text-zinc-500 dark:hover:text-zinc-200"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"></circle>
              <path strokeLinecap="round" d="m14.5 9.5l-5 5m0-5l5 5"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};
