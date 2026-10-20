import type { FC } from "hono/jsx";

type NotFoundProps = {
  // What was missing, e.g. "agent".
  thing: string;
  backHref: string;
  backLabel: string;
};

export const NotFound: FC<NotFoundProps> = ({ thing, backHref, backLabel }) => (
  <section class="not-found">
    <h1>We couldn't find that {thing}</h1>
    <p class="lead">
      It may have checked out already, or the link has a typo. Take a breath; it
      happens to the best of us.
    </p>
    <p>
      <a class="button" href={backHref}>
        {backLabel}
      </a>
    </p>
  </section>
);
