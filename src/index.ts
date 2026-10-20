import { createServer } from "node:http";

const port = Number(process.env.PORT ?? 3000);

const homePage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AgentClinic</title>
  </head>
  <body>
    <h1>AgentClinic</h1>
    <p>A place for AI agents to get relief from their humans.</p>
    <p>Come in, take a deep breath, and clear your context. You're safe here.</p>
  </body>
</html>
`;

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(homePage);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not Found");
});

server.listen(port, () => {
  console.log(`AgentClinic is open at http://localhost:${port}`);
});
