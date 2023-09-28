import { TrainingRoutes } from "../routes/TrainingRoutes";

export class LmsClient {
  private static instance: LmsClient;

  private constructor(
    // inject all dependencies here
    private readonly _trainingRoutes: TrainingRoutes
  ) {}

  public static getInstance(): LmsClient {
    if (!LmsClient.instance) {
      LmsClient.instance = new LmsClient(
        // initialize all dependencies here
        TrainingRoutes.getInstance()
      );
    }

    return LmsClient.instance;
  }

  public trainingRoutes() {
    return this._trainingRoutes;
  }
}
