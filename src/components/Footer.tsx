import type { FC } from "hono/jsx";

export const Footer: FC = () => (
  <footer class="site-footer">
    <p>
      © {new Date().getFullYear()} AgentClinic · No humans were prompted in the
      making of this page.
    </p>
  </footer>
);
