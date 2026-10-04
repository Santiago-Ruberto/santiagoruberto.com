# santiagoruberto.com

Personal website built with Next.js and React, published at
[www.santiagoruberto.com](https://www.santiagoruberto.com).

## Prerequisites

- Node.js 24, matching the Vercel project and GitHub Actions runtime.

## Quick Start

```bash
npm ci
npm run dev
npm test
```

`npm test` runs the production build, TypeScript checks, and the existing page
content test. Use `npm run dev -- --port 3002` if port 3000 is already occupied.

## Automatic deployment

The GitHub repository `Santiago-Ruberto/santiagoruberto.com` is connected to the
existing Vercel project **Melian / santiagoruberto**.

- **Production branch:** `main`. The older `master` branch is not used to
  publish the current site.
- **Production domain:** `https://www.santiagoruberto.com`.
- **Framework and runtime:** Next.js, Node.js 24.
- **Build command:** `npm run build` (Next.js framework default).
- **Domain assignment:** automatic for successful production deployments.

Every push or merged pull request to `main` triggers Vercel's Git integration.
Vercel builds that commit and assigns the existing production domains when the
deployment is ready. Other branches create preview deployments for review.
See the [Vercel GitHub integration documentation](https://vercel.com/docs/git/vercel-for-github).

The `Verify website` GitHub Actions workflow runs `npm ci` and `npm test` for
pull requests targeting `main` and pushes to `main`. CI and the Vercel build run
independently; this workflow does not deploy the site or require Vercel secrets.

For an approved publication, push the reviewed changes to `main` or merge the
reviewed PR into `main`. A separate manual Vercel deploy is not needed. Verify
the automatic deployment is Ready, matches the published commit, and serves the
updated page on the production domain before reporting completion.

The production branch is configured in **Project Settings → Environments →
Production → Branch Tracking**, with **Auto-assign Custom Production Domains**
enabled. The connected repository is configured in **Project Settings → Git**.

Do not commit `.vercel/`, login tokens, or environment secrets. If deployment
authorization fails, resolve the reported GitHub/Vercel account permission;
do not change projects, domains, or deployment protection as a workaround.

## Optional starter integrations

The following files and helpers were inherited from the original starter.
Production uses the Next.js commands above and Vercel's Git integration.
This project does not use `wrangler.jsonc`.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

Signed-in visitors receive both `oai-authenticated-user-id` and `oai-authenticated-user-email`. Private Sites require every visitor to sign in; public Sites may also have anonymous visitors, for whom neither header is present.

The user ID is stable for the same user on the same Site and different across Sites. Email and name are intended for display or contact purposes.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const userId = requestHeaders.get("oai-authenticated-user-id");
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: generate the Next.js production build and check TypeScript
- `npm test`: build the website and verify the post index and preserved speech

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
