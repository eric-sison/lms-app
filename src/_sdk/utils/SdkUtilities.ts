export class SdkUtilities {
  private static instance: SdkUtilities;

  private constructor() {}

  public static getInstance() {
    if (!SdkUtilities.instance) {
      SdkUtilities.instance = new SdkUtilities();
    }

    return SdkUtilities.instance;
  }

  /**
   * Functionality for modifying the url if parameters and/or queries are supplied.
   *
   * @param path - The path of the api end point. This will be appended to the base url of the server.
   * @param options - Additional information in the url. You can specify the `params`, `version`, and `queries` to match the actual server's end point.
   *
   * @example
   * await client.routes().
   *              getRequest({
   *                      version: 1,
   *                      parameter: '001',
   *                      queries: [{key: 'status', value: 'ongoing'}]
   *              })
   *
   * This should yeild this result:
   *
   * `http://localhost:3001/api/v1/001?status=ongoing`
   *
   */
  public modifyUrl(path: string, options?: UrlOptions) {
    const baseUrl = `${process.env.NEXT_PUBLIC_LMS_SERVER_URL}`;

    let url: string = "";

    const queryArray: string[] = [];

    options?.version
      ? (url = `${baseUrl}/v${options.version}/${path}`)
      : (url = `${baseUrl}/v1/${path}`);

    if (options?.params) url = `${url}/${options?.params}`;

    if (options?.queries) {
      options.queries.map((query) => queryArray.push(`${query.key}=${query.value}`));

      url = `${url}/?${queryArray.join("&")}`;
    }

    return url;
  }
}
