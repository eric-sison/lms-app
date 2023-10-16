"use client";

import { DataTable } from "@lms/components/primitives/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { FunctionComponent } from "react";

type Participant = {
  avatar: string;
  fullName: string;
  positionTitle: string;
};

// const participants = [
//   {
//     avatar: "",
//     fullName: "Grace C. Sison",
//     positionTitle: "position 1",
//   },
//   {
//     avatar: "",
//     fullName: "Eric C. Sison",
//     positionTitle: "position 2",
//   },
//   {
//     avatar: "",
//     fullName: "John C. Sison",
//     positionTitle: "position 3",
//   },
// ];

// const helper = createColumnHelper<Participant>();

// const columns = [
//   helper.accessor("fullName", {
//     header: "Name",
//     cell: (info) => info.getValue(),
//   }),

//   helper.accessor("positionTitle", {
//     header: "Position Title",
//     cell: (info) => info.getValue(),
//   }),
// ];

const participants = [
  {
    avatar: "/profile/default.jpeg",
    fullName: "Aatos Ludvigs",
    positionTitle: "Clerk Processor C",
  },

  {
    avatar: "/profile/profile1.jpg",
    fullName: "Kathleen Gertrudes",
    positionTitle: "Clerk Processor B",
  },

  {
    avatar: "/profile/profile2.jpg",
    fullName: "Mirica Demokritos",
    positionTitle: "Admin Aide 2",
  },

  {
    avatar: "/profile/profile3.jpg",
    fullName: "Faraj Julitta",
    positionTitle: "Clerk Processor A",
  },

  {
    avatar: "/profile/profile4.jpg",
    fullName: "Jonah Thom",
    positionTitle: "Supervisor 1",
  },

  {
    avatar: "/profile/profile5.jpg",
    fullName: "Zenais Hildegund",
    positionTitle: "Division Manage A",
  },

  {
    avatar: "/profile/profile1.jpg",
    fullName: "Soodeh Fearghal",
    positionTitle: "Supervisor 3",
  },

  {
    avatar: "/profile/profile3.jpg",
    fullName: "Duncan Girish",
    positionTitle: "MIS Researcher",
  },

  {
    avatar: "/profile/profile2.jpg",
    fullName: "Faraj Julitta",
    positionTitle: "System Analyst",
  },

  {
    avatar: "/profile/profile4.jpg",
    fullName: "Ziad Freja",
    positionTitle: "Clerk Processor B",
  },
];

export const TrainingParticipants: FunctionComponent = () => {
  return (
    <>
      <div>
        <header className="px-10 pt-7">
          <h3 className="text-3xl font-semibold dark:text-zinc-300">
            Training Participants
          </h3>
          <p className="text-xl dark:text-zinc-400">
            List of confirmed participants for this training
          </p>
        </header>
        <main>
          <ul className="space-y-3 p-10">
            {/* <DataTable<Participant> data={participants} columns={columns} /> */}
            {participants.map((participant, index) => (
              <li
                key={index}
                className="bg-zinc-900 px-6 py-4 rounded-lg flex items-center gap-5"
              >
                <Image
                  src={participant.avatar}
                  alt="avatar"
                  width={200}
                  height={200}
                  className="h-14 w-14 border rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl">{participant.fullName}</h3>
                  <p className="dark:text-zinc-500">{participant.positionTitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};
