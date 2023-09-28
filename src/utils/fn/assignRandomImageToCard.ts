import { readdirSync } from "fs";
import * as path from "path";
import { getProjectRootDir } from "./getProjectRootDir";

export const assignRandomImageToCard = () => {
  const fileList = readdirSync(path.join(getProjectRootDir(), "../public/patterns/PNG"));

  const randomImage = Math.floor(Math.random() * fileList.length);

  return `/patterns/PNG/${fileList[randomImage]}`;
};
