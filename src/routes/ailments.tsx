import { Hono } from "hono";
import { db } from "../db.ts";

export const ailments = new Hono();

ailments.get("/", async (c) => {
  const list = await db.ailment.findMany({ orderBy: { name: "asc" } });

  return c.render(
    <>
      <h1>Ailments</h1>
      <p class="lead">What our patients come in with.</p>
      {list.length === 0 ? (
        <p class="empty">No ailments on record. A clean bill of health!</p>
      ) : (
        <ul class="card-grid">
          {list.map((ailment) => (
            <li class="card">
              <h2>
                <a class="card-link" href={`/ailments/${ailment.slug}`}>
                  {ailment.name}
                </a>
              </h2>
              <p class="card-meta">{ailment.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>,
    { title: "Ailments · AgentClinic" },
  );
});
