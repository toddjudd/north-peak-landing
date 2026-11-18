# North Peak

A marketing site for North Peak, a roofing and home-exterior company: roof
replacement, repairs, restoration, gutters, and free estimates.

> **Status:** In progress and not live yet. The before-and-after gallery
> still uses placeholder photos.

## What's on the page

- A hero with a free-estimate call to action
- Services: roof replacements, repairs, inspections, and gutters
- A before-and-after project gallery
- Customer testimonials
- A contact section for estimate requests

The hero has two built-in switchers, one for the background photo and one for
the logo style. They let the client compare options during design review.

## Stack

Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Run locally

```bash
pnpm install
pnpm dev         # http://localhost:3000
pnpm build
```

Business details such as the name, tagline, and description are set as
constants in `app/layout.tsx` and `app/page.tsx`.
