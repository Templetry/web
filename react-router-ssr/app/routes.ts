import { type RouteConfig, index } from "@react-router/dev/routes";

// Server-rendered and indexable. Keep public pages and the authenticated
// application apart in this table: it is what keeps the public side light and
// crawlable while the app side can be as heavy as it needs.
export default [
  index("routes/home.tsx"),
] satisfies RouteConfig;
