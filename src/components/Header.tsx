import type { FC } from "hono/jsx";

export const navLinks = [{ href: "/agents", label: "Agents" }];

export const Header: FC = () => (
  <header class="site-header">
    <a class="site-name" href="/">
      AgentClinic
    </a>
    <nav class="site-nav" aria-label="Main">
      <ul>
        {navLinks.map((link) => (
          <li>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
