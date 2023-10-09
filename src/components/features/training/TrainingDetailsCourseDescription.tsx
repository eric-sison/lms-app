"use client";

import { FunctionComponent, useState } from "react";

export const TrainingDetailsCourseDescription: FunctionComponent = () => {
  const [toggleReadMore, setToggleReadMore] = useState(false);
  return (
    <div className="mt-10 space-y-2 max-w-7xl">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-medium">Course Description</h3>
      </div>
      <p
        className={`${
          toggleReadMore ? "line-clamp-none" : "line-clamp-2"
        } dark:text-zinc-300 text-justify text-lg`}
      >
        The lack of competency and efficiency in pumping operations can have significant
        effect on various aspects of the water system and overall operations.Inefficient
        operations can result in increased maintenance and repair costs. Incompetent
        operators may overlook routine maintenance tasks or fail to identify and address
        minor issues promptly. This can lead to more significant problems over time,
        requiring costly repairs or even replacement of equipment. Increased maintenance
        and repair expenses can strain the organization&apos;s budget and resources.
        Inefficient pumping operations can negatively impact customer satisfactio.
        Customers may experience disruptions in water supply, reduced water pressure, or
        water quality isseues. Prolonged system downtime or inconsistent service can lead
        to customer complaints, lower trust in the organization, and a negative perception
        of its services.
      </p>
      <button onClick={() => setToggleReadMore(!toggleReadMore)}>
        <span className="text-xl dark:text-indigo-500 font-medium border-b border-transparent hover:dark:border-b-indigo-500">
          {toggleReadMore ? <>Show less</> : <>Read more</>}
        </span>
      </button>
    </div>
  );
};
