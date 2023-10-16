"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { FunctionComponent, useState } from "react";
import { UploadFilesModal } from "./UploadFilesModal";
import { Client, Models, Storage } from "appwrite";
import { FileThumbnail } from "./Thumbnail";
import { PhotoPreviewModal } from "./PhotoPreviewModal";
import { MimeTypes } from "@lms/utils/enums/mimeTypes";

type Folder = {
  id: string;
  name: string;
};

const client = new Client()
  .setEndpoint("http://localhost:8001/v1")
  .setProject("650bcf0779174ca1a5ae");

const storage = new Storage(client);

export const TrainingMaterialsContent: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<{ id: string; name: string }>();
  const [showPreview, setShowPreview] = useState(false);
  const [filesToPreview, setFilesToPreview] = useState<Models.FileList>();

  const router = useRouter();

  const queryClient = useQueryClient();
  const bucketId = useSearchParams().get("bucket-id") as string;

  if (!bucketId) {
    redirect(
      `/trainings/details?pos=materials&bucket-id=${
        queryClient.getQueryData<Folder[]>(["find-all-folders"])?.[0].id
      }`
    );
  }

  useEffect(() => {
    const folders = queryClient.getQueryData(["find-all-folders"]) as unknown as Array<
      Folder | undefined
    >;
    const currFolder = folders?.filter((folder) => folder?.id === bucketId);

    setSelectedFolder(currFolder?.[0]);
  }, [bucketId, queryClient]);

  const { data: myFiles } = useQuery({
    queryKey: ["get-files", bucketId],
    queryFn: async () => {
      return await storage.listFiles(bucketId);
    },
  });

  console.log(queryClient.getQueryData(["find-all-folders"]));

  return (
    <>
      <UploadFilesModal open={open} setOpen={setOpen} />
      <PhotoPreviewModal
        open={showPreview}
        setOpen={setShowPreview}
        files={filesToPreview}
      />

      <div className="w-full h-full">
        {queryClient.getQueryData<Array<any>>(["find-all-folders"])?.length !== 0 && (
          <header className="h-32 px-10 flex items-center justify-between">
            <section className="space-y-1">
              <h3 className="text-3xl font-semibold dark:text-zinc-300">
                {selectedFolder?.name}
              </h3>
              <p className="text-xl dark:text-zinc-400">
                Browse from{" "}
                <span className="dark:text-indigo-500">
                  {selectedFolder?.name.toLocaleLowerCase()}
                </span>
                , or upload new files into this folder.
              </p>
            </section>

            <button
              onClick={() => setOpen(true)}
              className="text-xl dark:bg-indigo-700 px-5 py-2 rounded dark:text-zinc-200 flex items-center gap-1"
            >
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.45em"
              height="1.45em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.71 11.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-2 2a1 1 0 0 0 1.42 1.42l.29-.3V17a1 1 0 0 0 2 0v-2.59l.29.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM20 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.1a1.1 1.1 0 0 0-.31-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3Z"
              ></path>
            </svg> */}
              <p className="font-semibold dark:text-zinc-200">Upload file</p>
            </button>
          </header>
        )}

        <main className="w-full h-[calc(100%-8rem)] overflow-y-auto px-10 py-5">
          {myFiles?.files.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-5 dark:bg-zinc-900/30 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10em"
                height="10em"
                viewBox="0 0 16 16"
                className="dark:text-zinc-700"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4 4h3v1H4v3H3V5H0V4h3V1h1v3zM1 14.5V9h1v5h12V7H8V6h6V4H8V3h6.5l.5.5v11l-.5.5h-13l-.5-.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="text-5xl font-semibold dark:text-zinc-700">
                No files found
              </h3>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-5">
              {myFiles?.files.map((file, index) => {
                const previewUrl = storage.getFilePreview(bucketId, file.$id).href;

                return (
                  <div
                    key={index}
                    className="flex gap-4 items-center dark:bg-zinc-900 p-4 rounded-md"
                  >
                    <div
                      role="button"
                      onClick={async () => {
                        setShowPreview(true);
                        //setUrlToPreview(storage.getFileView(bucketId, file.$id).href);
                        const fileList = await storage.listFiles(bucketId);
                        setFilesToPreview(fileList);
                      }}
                      className={`${
                        file.mimeType === MimeTypes.PNG ||
                        file.mimeType === MimeTypes.JPEG
                          ? "p-0"
                          : "p-3"
                      } h-16 w-16 shrink-0 dark:bg-zinc-700/30 rounded-md overflow-clip`}
                    >
                      <FileThumbnail
                        mimeType={file.mimeType}
                        photoUrl={
                          file.mimeType === MimeTypes.PNG ||
                          file.mimeType === MimeTypes.JPEG
                            ? previewUrl
                            : undefined
                        }
                      />
                    </div>

                    <div className="space-y-2 max-w-[15rem]">
                      <h3
                        role="button"
                        title={file.name}
                        onClick={() => {
                          const resource = storage.getFileDownload(bucketId, file.$id);
                          router.push(resource.href);
                        }}
                        className="text-xl font-medium dark:text-zinc-200 w-full truncate border-b border-b-transparent dark:hover:border-b-zinc-200"
                      >
                        {file.name}
                      </h3>
                      <p className="text-sm dark:text-zinc-500 font-medium">
                        {file.sizeOriginal / 1000} KiB
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </>
  );
};
