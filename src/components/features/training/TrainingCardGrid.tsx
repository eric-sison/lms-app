import { FunctionComponent, ReactNode } from "react";

type TrainingCardPageProps = {
  children: ReactNode | ReactNode[];
};

export const TrainingCardGrid: FunctionComponent<TrainingCardPageProps> = ({
  children,
}) => {
  return (
    <div className="p-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 gap-x-5 md:gap-y-14 lg:gap-y-14 xl:gap-y-14">
      {children}
    </div>
  );
};
