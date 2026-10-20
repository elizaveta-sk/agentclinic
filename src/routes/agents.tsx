import { Hono } from "hono";
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
