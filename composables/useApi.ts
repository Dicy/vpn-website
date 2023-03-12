import {Api, createApi} from "~/api/base";

let instance: Api;

export default function useApi() {
  if (instance) return instance;

  const {apiHost} = useRuntimeConfig().public;
  instance = createApi(apiHost);

  return instance;
}
