// React Router 8 removed AppLoadContext in favour of a typed context registry.
// The load context arrives as a RouterContextProvider.
import type { EntryContext, RouterContextProvider } from "react-router";
import { ServerRouter } from "react-router";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  _loadContext: RouterContextProvider,
) {
  let shellRendered = false;
  let statusCode = responseStatusCode;

  const body = await renderToReadableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {
      onError(error: unknown) {
        statusCode = 500;
        // Errors thrown after the shell is sent are logged but cannot change
        // the status code any more.
        if (shellRendered) console.error(error);
      },
    },
  );
  shellRendered = true;

  // A crawler gets the fully rendered document rather than a stream it may not
  // wait for. The public pages are the only acquisition channel, so this is the
  // line that keeps them indexable.
  const userAgent = request.headers.get("user-agent");
  if (userAgent && isbot(userAgent)) {
    await body.allReady;
  }

  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, { headers: responseHeaders, status: statusCode });
}
