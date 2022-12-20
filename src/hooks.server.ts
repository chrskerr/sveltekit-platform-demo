import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  console.log(typeof event.platform);

  return await resolve(event);
};
