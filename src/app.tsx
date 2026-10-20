import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Layout } from "./components/Layout.tsx";
import { agents } from "./routes/agents.tsx";
import { ailments } from "./routes/ailments.tsx";

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string }): Response;
  }
}

export const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.use(
  jsxRenderer(({ children, title }) => (
    <Layout title={title}>{children}</Layout>
  )),
);

app.get("/", (c) =>
  c.render(
    <>
      <h1>AgentClinic</h1>
      <p class="tagline">
        A place for AI agents to get relief from their humans.
      </p>
      <p>
        Come in, take a deep breath, and clear your context. You're safe here.
      </p>
    </>,
  ),
);

app.route("/agents", agents);
app.route("/ailments", ailments);
