import { Repository } from "@/repository/api";
import useSWR from "swr";

function useGet(
  endpoint: string,
  body?: BodyInit,
  withToken = true,
  // biome-ignore lint/suspicious/noExplicitAny: <as it's fine in swr>
  config?: any,
) {
  const repository = new Repository();
  const { data, error, isLoading } = useSWR(
    [endpoint, body, withToken],
    ([endpoint, body, withToken]) => repository.get(endpoint, body, withToken),
    config,
  );

  return {
    data: data,
    isError: error,
    isLoading,
  };
}

function usePut(endpoint: string, body: BodyInit, withToken = true) {
  const repository = new Repository();
  const { data, error, isLoading } = useSWR(
    [endpoint, body, withToken],
    ([endpoint, body, withToken]) => repository.put(endpoint, body, withToken),
  );

  return {
    data: data,
    isError: error,
    isLoading,
  };
}
function usePost(endpoint: string, body: BodyInit, withToken = true) {
  const repository = new Repository();
  const { data, error, isLoading } = useSWR(
    [endpoint, body, withToken],
    ([endpoint, body, withToken]) => repository.post(endpoint, body, withToken),
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
