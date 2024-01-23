import { createApi } from "unsplash-js";

const myAccessKey: string = process.env.NEXT_PUBLIC_UNSPLSH_ACCESS_KEY || "";

export const unsplash = createApi({
  accessKey: myAccessKey,
});
