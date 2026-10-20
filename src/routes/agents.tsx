import { Hono } from "hono";
import { NotFound } from "../components/NotFound.tsx";
import { db } from "../db.ts";

export const agents = new Hono();

agents.get("/", async (c) => {
  const list = await db.agent.findMany({ orderBy: { name: "asc" } });

  return c.render(
    <>
      <h1>Agents</h1>
      <p class="lead">The patients currently in our care.</p>
      {list.length === 0 ? (
        <p class="empty">No agents are checked in right now. Enjoy the calm.</p>
      ) : (
        <ul class="card-grid">
          {list.map((agent) => (
            <li class="card">
              <h2>
                <a class="card-link" href={`/agents/${agent.slug}`}>
                  {agent.name}
                </a>
              </h2>
              <p class="card-meta">{agent.role}</p>
            </li>
          ))}
        </ul>
      )}
    </>,
    { title: "Agents · AgentClinic" },
  );
});

agents.get("/:slug", async (c) => {
  const agent = await db.agent.findUnique({
    where: { slug: c.req.param("slug") },
  });

  if (!agent) {
    c.status(404);
    return c.render(
      <NotFound thing="agent" backHref="/agents" backLabel="See all agents" />,
      { title: "Agent not found · AgentClinic" },
    );
  }

  return c.render(
    <>
      <p class="breadcrumb">
        <a href="/agents">← All agents</a>
      </p>
      <h1>{agent.name}</h1>
      <p class="lead">{agent.role}</p>
      <p class="prose">{agent.bio}</p>
    </>,
    { title: `${agent.name} · AgentClinic` },
  );
});
