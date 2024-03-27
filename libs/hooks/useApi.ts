import { Repository } from "@/repository/api";
import useSWR from "swr";

function useGet<T>(
  endpoint: string,
  body?: BodyInit,
  withToken = true,
  // biome-ignore lint/suspicious/noExplicitAny: <as it's fine in swr>
  config?: any,
) {
  const repository = new Repository();
  const { data, error, isLoading } = useSWR(
    [endpoint, body, withToken],
    ([endpoint, body, withToken]) =>
      repository.get<T>(endpoint, body, withToken),
    config,
  );

  return {
    data: data,
    isError: error,
    isLoading,
  };
}

function usePut<T>(endpoint: string, body: BodyInit, withToken = true) {
  const repository = new Repository();
  const { data, error, isLoading } = useSWR(
    [endpoint, body, withToken],
    ([endpoint, body, withToken]) =>
      repository.put<T>(endpoint, body, withToken),
  );

  return {
    data: data,
    isError: error,
    isLoading,
  };
}
function usePost<T>(endpoint: string, body: BodyInit, withToken = true) {
  const repository = new Repository();
  const { data, error, isLoading } = useSWR(
    [endpoint, body, withToken],
    ([endpoint, body, withToken]) =>
      repository.post<T>(endpoint, body, withToken),
  );

  return {
    data: data,
    isError: error,
    isLoading,
  };
}

export const useApi = () => {
  return {
    useGet,
    usePut,
    usePost,
  };
};
