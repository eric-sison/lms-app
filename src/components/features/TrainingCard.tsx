import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

type TrainingCardProps = {
  image?: string;
  title: string;
  details?: string;
  tag: string;
  // dateFrom: Date;
  // dateTo: Date;
};

export const TrainingCard: FunctionComponent<TrainingCardProps> = ({
  image,
  title,
  details,
  tag,
}) => {
  return (
    <div className="border-2 border-zinc-200/50 group bg-white dark:border-zinc-700 rounded-lg dark:bg-dark-secondary overflow-clip max-h-96 shadow-2xl shadow-zinc-200 dark:shadow-transparent">
      <header className="h-52 border-b-2 border-b-zinc-100 dark:border-b-zinc-700 overflow-clip cursor-pointer relative">
        <div className="h-full w-full bg-gradient-to-t from-black/50 bg-opacity-20 absolute transition-colors duration-100" />
        <Image
          src={image ?? ""}
          alt="card-image"
          width={500}
          height={500}
          className="inline-block h-full w-full object-cover shrink-0 group-hover:scale-150 transition-all duration-1000 ease-out"
        />
      </header>

      <div className="px-5 pt-4 pb-7 space-y-3">
        <section className="space-y-3">
          <Link
            href="/"
            className="text-xl font-medium text-indigo-700 dark:text-indigo-400 line-clamp-1 leading-6 border-b-2 border-b-transparent hover:border-b-indigo-700 dark:hover:border-b-indigo-400"
          >
            {title}
          </Link>
          <p className="text-zinc-600 text-lg dark:text-zinc-300 leading-6 line-clamp-2">
            {details}
          </p>
        </section>

        <section>
          <span className="bg-zinc-600 dark:bg-zinc-600/60 px-2 py-1 font-medium rounded-sm text-sm text-zinc-200">
            {tag}
          </span>
        </section>
      </div>
    </div>
  );
};
