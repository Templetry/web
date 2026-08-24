import type { Config } from "@react-router/dev/config";

export default {
  // Server rendering is not optional here: the public pages are the only
  // acquisition channel, and a client-rendered shell serves a crawler nothing.
  ssr: true,
} satisfies Config;
