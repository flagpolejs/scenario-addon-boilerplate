import { HttpResponse } from "flagpole";
import { KeyValue } from "flagpole/dist/interfaces/generic-types";
import { HttpRequestFetch, iHttpRequest } from "flagpole/dist/interfaces/http";

export const SampleAdapter: HttpRequestFetch = async (
  request: iHttpRequest,
  opts?: KeyValue
): Promise<HttpResponse> => {
  return {
    body: "Hello World",
    json: null,
    statusCode: 200,
    statusMessage: "OK",
    headers: {},
    cookies: {},
    trailers: {},
    url: request.uri || "",
    method: request.method,
  };
};
