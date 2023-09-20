import { TrainingCard } from "@lms/components/features/TrainingCard";
import { assignRandomImageToCard } from "@lms/utils/fn/assignRandomImageToCard";

export default async function Trainings() {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-5 gap-x-5 md:gap-y-14 lg:gap-y-14 xl:gap-y-14">
      <TrainingCard
        image={assignRandomImageToCard()}
        title="Frontend Development with ReactJS"
        details="Learn React from the ground up and finish the course as an advanced React developer"
        tag="Software Development"
      />

      <TrainingCard
        image={assignRandomImageToCard()}
        title="Pump Operator Proficiency Assessment Program (POPAP)"
        details="The lack of competency and efficiency in pumping operations can have siginificant effects."
        tag="Plumbing"
      />

      <TrainingCard
        image={assignRandomImageToCard()}
        title="Globe Business: AWS Cloud Migration"
        details="An event in partnership with Amazon Web Services about how technology can future-proof your business."
        tag="Software Development"
      />

      <TrainingCard
        image={assignRandomImageToCard()}
        title="NestJS Zero to Hero: Typescript Backend Development"
        details="Develop and deploy enterprise backend apps following best practices using Node.js and TypeScript"
        tag="Software Development"
      />

      <TrainingCard
        image={assignRandomImageToCard()}
        title="Golang for DevOps and Cloud Engineers"
        details="Learn by example how to use Go (Golang) with REST APIs, Amazon Web Services (AWS), Azure, GitHub, Kubernetes, and more"
        tag="Software Development"
      />
    </div>
  );
}
