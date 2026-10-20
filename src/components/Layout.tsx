import type { FC, PropsWithChildren } from "hono/jsx";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";
import { Main } from "./Main.tsx";

type LayoutProps = PropsWithChildren<{ title?: string }>;

export const Layout: FC<LayoutProps> = ({
  title = "AgentClinic",
  children,
}) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="stylesheet" href="/static/styles.css" />
    </head>
    <body>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </body>
  </html>
);
