"use client";

import { FunctionComponent } from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";
import {
  ScheduleSidebarItemIcon,
  CertificateSidebarItemIcon,
  CourseMaterialsSidebarItemIcon,
  DashboardSidebarItemIcon,
  FilesSidebarItemIcon,
  FolderSidebarItemIcon,
  ProfileSidebarItemIcon,
  SettingsSidebarItemIcon,
  TrainingReportsSidebarItemIcon,
  TrainingSidebarItemIcon,
} from "./SidebarMenuItemIcons";
import { SidebarMenuGroup } from "./SidebarMenuGroup";
import { SidebarCardHeader } from "./SidebarCardHeader";

export const Sidebar: FunctionComponent = () => {
  return (
    <aside className="w-72 shrink-0 h-full bg-dark-primary dark:bg-dark-secondary">
      <section className="mt-10 px-4">
        <SidebarCardHeader />
      </section>

      <ul role="menu" className="px-4 space-y-1">
        <SidebarMenuItem
          icon={<DashboardSidebarItemIcon />}
          path="/dashboard"
          label="Dashboard"
          counter={undefined}
        />

        <SidebarMenuItem
          icon={<ProfileSidebarItemIcon />}
          path="/profile"
          label="Profile"
          counter={undefined}
        />

        <SidebarMenuItem
          icon={<FilesSidebarItemIcon />}
          path="/folders"
          label="My Files"
          counter={undefined}
        />

        <SidebarMenuItem
          icon={<TrainingSidebarItemIcon />}
          path="/trainings"
          label="Trainings"
          counter={2}
        />

        <SidebarMenuItem
          icon={<ScheduleSidebarItemIcon />}
          path="/attendance"
          label="Schedules"
          counter={undefined}
        />

        <SidebarMenuItem
          icon={<SettingsSidebarItemIcon />}
          path="/settings"
          label="Settings"
          counter={undefined}
        />

        {/* <SidebarMenuGroup header="Trainings">
          <SidebarMenuItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-green-600"
              >
                <g fill="currentColor">
                  <path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></path>
                  <path
                    fillRule="evenodd"
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            }
            path="/"
            label="All trainings"
            counter={18}
          />

          <SidebarMenuItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-amber-600"
              >
                <g fill="currentColor">
                  <path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></path>
                  <path
                    fillRule="evenodd"
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            }
            path="/"
            label="Upcoming"
            counter={2}
          />

          <SidebarMenuItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-blue-600"
              >
                <g fill="currentColor">
                  <path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></path>
                  <path
                    fillRule="evenodd"
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            }
            path="/"
            label="Completed"
            counter={16}
          />
        </SidebarMenuGroup> */}

        <SidebarMenuGroup header="Requirements">
          <SidebarMenuItem
            icon={<CourseMaterialsSidebarItemIcon />}
            path={"/"}
            label={"Course Materials"}
            counter={undefined}
          />

          <SidebarMenuItem
            icon={<TrainingReportsSidebarItemIcon />}
            path="/"
            label="Training Reports"
          />

          <SidebarMenuItem
            icon={<CertificateSidebarItemIcon />}
            path={"/"}
            label={"Certificates"}
            counter={1}
          />
        </SidebarMenuGroup>
      </ul>
    </aside>
  );
};
