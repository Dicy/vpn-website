import type {IncomingMessage} from "unenv/runtime/node/http";

export default defineEventHandler(async (event) => {
  const req = event.node.req as IncomingMessage;
  const hostname = (req.headers.host ?? "").split(":")[0];
  if (hostname.endsWith(".pages.dev")) {
    setResponseHeader(event, "X-Robots-Tag", "noindex");
    // redirect main pages.dev domain
    if (hostname.split(".").length === 3) {
      await sendRedirect(event, `https://dicyvpn.com`, 301)
    }
  }
});