import { FunctionComponent } from "react";
import { useTrainings } from "./TrainingPage";
import { TrainingCardClassic } from "./TrainingCardClassic";

export const TrainingCardGrid: FunctionComponent = () => {
  const { filteredTrainings } = useTrainings();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 gap-x-5 md:gap-y-14 lg:gap-y-14 xl:gap-y-14">
      {filteredTrainings.map((training, index) => (
        <TrainingCardClassic key={index} training={training} />
      ))}

      {filteredTrainings.map((training, index) => (
        <TrainingCardClassic key={index} training={training} />
      ))}

      {filteredTrainings.map((training, index) => (
        <TrainingCardClassic key={index} training={training} />
      ))}

      {filteredTrainings.map((training, index) => (
        <TrainingCardClassic key={index} training={training} />
      ))}
    </div>
  );
};
