"use client";

import { DataTable } from "@lms/components/primitives/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import { FunctionComponent } from "react";

type Participant = {
  avatar: string;
  fullName: string;
  positionTitle: string;
};

const participants = [
  {
    avatar: "",
    fullName: "Grace C. Sison",
    positionTitle: "position 1",
  },
  {
    avatar: "",
    fullName: "Eric C. Sison",
    positionTitle: "position 2",
  },
  {
    avatar: "",
    fullName: "John C. Sison",
    positionTitle: "position 3",
  },
];

const helper = createColumnHelper<Participant>();

const columns = [
  helper.accessor("fullName", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),

  helper.accessor("positionTitle", {
    header: "Position Title",
    cell: (info) => info.getValue(),
  }),
];

export const TrainingParticipants: FunctionComponent = () => {
  return (
    <>
      <div>
        <header>Participants</header>
        <main>
          <DataTable<Participant> data={participants} columns={columns} />
        </main>
      </div>
    </>
  );
};
