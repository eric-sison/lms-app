type QueryUrl<Key extends PropertyKey, Value> = {
  key: Key;
  value: Value;
};

type UrlOptions = {
  version?: number;
  params?: string;
  queries?: QueryUrl<string, any>[];
};
