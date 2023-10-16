"use client";

import * as Appwrite from "appwrite";
import axios from "axios";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
//import sdk from "node-appwrite";

const client = new Appwrite.Client()
  .setEndpoint("http://172.20.110.55:8001/v1")
  .setProject("6507a5e601e17c0ddd99");

const storage = new Appwrite.Storage(client);

// const client = new sdk.Client()
//   .setEndpoint("http://172.20.110.55:8001/v1")
//   .setProject("6507a5e601e17c0ddd99");

// const storage = new sdk.Storage(client);

type BucketFile = {
  id: string;
  name: string;
  href: string;
  sizeOriginal: string;
  mimeType: string;
};

const bucketFiles: BucketFile[] = [
  { id: "123", name: "test1", href: "/", sizeOriginal: "200KiB", mimeType: "PNG" },
  { id: "456", name: "test2", href: "/", sizeOriginal: "200KiB", mimeType: "PNG" },
  { id: "789", name: "test3", href: "/", sizeOriginal: "200KiB", mimeType: "PNG" },
  { id: "012", name: "test4", href: "/", sizeOriginal: "200KiB", mimeType: "PNG" },
];

export const Testing: FunctionComponent = () => {
  // const [file, setFile] = useState<FileList | null>(null);
  // const [preview, setPreview] = useState<string | undefined>(undefined);
  const [ids, setIds] = useState<string[]>([]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      {/* <div className="flex flex-col gap-5">
        <input type="file" onChange={(e) => setFile(e.target.files)} />
        <button
          className="bg-indigo-600 px-3 py-2"
          onClick={async () => {
            if (file !== undefined || file !== null) {
              const result = await storage.createFile(
                "65234fb1bdf59e72df9d",
                "file_008",
                //@ts-ignore
                file[0]
              );

              console.log(result);
            }
            //console.log(client);
            //console.log(file?.[0])
          }}
        >
          Upload
        </button>

        <button
          onClick={async () => {
            const result = await axios.post(
              "http://localhost:3001/api/v1/trainings/bucket",
              { name: "Bucket Name" }
            );
            console.log(result);
          }}
        >
          Create Bucket
        </button>

        <Image
          src={
            "http://172.20.110.55:8001/v1/storage/buckets/65234fb1bdf59e72df9d/files/file_008/preview?project=6507a5e601e17c0ddd99"
          }
          alt="preview"
          width={100}
          height={100}
        />
      </div> */}

      <div className="flex flex-col">
        <button
          onClick={() => {
            const myIds = bucketFiles.map((file) => file.id);
            console.log(myIds);
            //setIds(myIds);
          }}
        >
          Test
        </button>

        <button onClick={() => console.log(ids)}>Log Ids</button>
      </div>
    </div>
  );
};
