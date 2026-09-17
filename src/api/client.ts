import { config } from "../config";

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

function getErrorMessage(data: unknown, response: Response) {
  if (
    typeof data === "object" &&
    data !== null &&
    "msg" in data &&
    typeof data.msg === "string"
  ) {
    return data.msg;
  }

  return `API Error: ${response.status} ${response.statusText}`;
}

function createClient(baseUrl: string) {
  async function request<T>(path: string, options: RequestOptions = {}) {
    const headers = new Headers(options.headers);
    const hasBody = options.body !== undefined;

    if (hasBody && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    const response = await fetch(`${baseUrl}${path}`, {
      ...options,
      headers,
      body: hasBody ? JSON.stringify(options.body) : undefined,
    });
    const contentType = response.headers.get("content-type") ?? "";
    const data: unknown = contentType.includes("application/json")
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      throw new Error(getErrorMessage(data, response));
    }

    return data as T;
  }

  return {
    get: <T>(path: string, options?: RequestOptions) =>
      request<T>(path, { ...options, method: "GET" }),
    post: <T>(path: string, body?: unknown, options?: RequestOptions) =>
      request<T>(path, { ...options, method: "POST", body }),
  };
}

export const gameClient = createClient(config.gameApiUrl);
export const recordsClient = createClient(config.recordsApiUrl);
