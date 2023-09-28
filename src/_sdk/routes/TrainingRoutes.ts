import axios, { AxiosRequestConfig } from "axios";
import { Training } from "@lms/types/training";
import { SdkUtilities } from "../utils/SdkUtilities";

export class TrainingRoutes {
  private static instance: TrainingRoutes;

  private constructor(private readonly sdkUtils: SdkUtilities) {}

  public static getInstance(): TrainingRoutes {
    if (!TrainingRoutes.instance) {
      TrainingRoutes.instance = new TrainingRoutes(SdkUtilities.getInstance());
    }
    return TrainingRoutes.instance;
  }

  async getAllTrainings(options?: UrlOptions, config?: AxiosRequestConfig<any>) {
    const url = this.sdkUtils.modifyUrl("trainings", options);
    return (await axios.get<Training[]>(`${url}`, config)).data;
  }

  // async createTraining(options?: ApiConfig) {
  //   return await axios.post('', options?.body, {})
  // }
}
