import axios, { AxiosRequestConfig } from "axios";
import { Training } from "@lms/types/training";
import { SdkUtilities } from "../utils/SdkUtilities";
import { TrainingCountPerStatus } from "../types/Training";

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

  async getFilteredTrainings(options?: UrlOptions, config?: AxiosRequestConfig<any>) {
    const url = this.sdkUtils.modifyUrl("trainings/filter", options);
    return (await axios.get<Training[]>(`${url}`, config)).data;
  }

  async getTrainingCount(options?: UrlOptions, config?: AxiosRequestConfig<any>) {
    const url = this.sdkUtils.modifyUrl("trainings/count", options);
    return (await axios.get<TrainingCountPerStatus>(`${url}`, config)).data;
  }
}
