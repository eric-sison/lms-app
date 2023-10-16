"use client";

import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { TrainingDetailsCourseDescription } from "./TrainingDetailsCourseDescription";
import { TrainingDetailsCourseOutline } from "./TrainingDetailsCourseOutline";
import { TrainingDetailsAttachments } from "./TrainingDetailsAttachments";

export const TrainingDetailsHeader: FunctionComponent = () => {
  return (
    <header>
      <div className="space-y-2">
        <Image
          src={"/profile/profile4.jpg"}
          alt="profile"
          width={500}
          height={500}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div className="space-y-2">
          <h3 className="text-3xl font-semibold dark:text-zinc-300">
            Pump Operator Proficiency Assessment Program (POPAP)
          </h3>

          <div className="">
            <div className="flex items-center gap-2">
              <p className="dark:text-zinc-400 font-medium line-clamp-1">
                General Santos City Water District - Training Hall, E. Fernandez St.,
                Lagao, General Santos City
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 font-medium">
                <p className="dark:text-zinc-400">August 23 - 25, 2023</p>
                <p className="dark:text-zinc-600">|</p>
                <p className="dark:text-zinc-400">8:00AM - 5:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <TrainingDetailsCourseDescription />

      <TrainingDetailsCourseOutline />

      <TrainingDetailsAttachments /> */}
    </header>
  );
};
