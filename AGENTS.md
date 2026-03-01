# AGENTS.md - Agentic Coding Guidelines

This document provides guidelines for agents working on this codebase.

## Project Overview

This is an Astro blog website using:
- **Framework**: Astro 5.18.0
- **Styling**: Tailwind CSS 4.x
- **Content**: Astro content collections with Zod schema validation
- **Format**: MDX files via @astrojs/mdx
- **Package Manager**: Bun
- **TypeScript**: Strict mode enabled

## Build Commands

```bash
# Install dependencies
bun install

# Start development server (http://localhost:4321)
bun run dev

# Build for production
bun run build

# Preview production build locally
bun run preview

# Run Astro CLI commands
bun astro <command>
bun astro --help

# Type-check the project
bun astro check
```

### Single Test
This project does not have a test framework configured.

## Code Style Guidelines

### Imports

- Use absolute imports from `astro:content`, `astro:assets`, etc.
- Use relative imports for local components (`../components/Component.astro`)
- Import CSS files in the frontmatter, not in the template

### Naming Conventions

- **Components**: PascalCase (e.g., `BlogCard.astro`, `Header.astro`)
- **Variables**: camelCase
- **Files**: kebab-case for non-component files
- **Content collections**: singular names (`blog`, not `blogs`)

### Component Structure

Organize Astro components with: frontmatter script, Props interface, and template.

```astro
---
import Component from './Component.astro';

interface Props {
  title: string;
  count?: number;
}

const { title, count = 0 } = Astro.props;
---

<section class="my-class">
  <h1>{title}</h1>
  <Component value={count} />
</section>
```

### Tailwind CSS

- Use Tailwind utility classes for all styling
- Use dark mode with `dark:` modifier (already configured)
- Use `max-w-5xl mx-auto px-6` for container consistency

### Content Collections

- Define schemas in `src/content/config.ts` using Zod
- Blog posts go in `src/content/blog/` as .mdx files

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = { blog };
```

### Dark Mode

- Use `dark:` modifier for dark mode styles
- Theme toggle is in `src/layouts/Layout.astro`
- Access theme via `document.documentElement.classList.contains('dark')`

### File Organization

```
src/
├── components/     # Reusable UI components
├── content/blog/   # Blog posts (.mdx files)
├── content/config.ts # Content collection schemas
├── layouts/        # Page layouts
├── pages/          # Route pages
└── styles/         # Global CSS
```

### Common Patterns

**Conditional Rendering:**
```astro
{condition && <Component />}
{condition ? <TrueComponent /> : <FalseComponent />}
```

**Loops:**
```astro
{posts.map((post) => (
  <article>{post.data.title}</article>
))}
```

**Dynamic Routes:**
```astro
// src/pages/[...slug].astro
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
```

## Best Practices

1. **Performance**: Prefer static generation over SSR unless needed
2. **Images**: Use Astro's image optimization for featured images
3. **SEO**: Always include meta description in layouts
4. **Accessibility**: Use semantic HTML and ARIA labels where needed
5. **Responsive**: Use Tailwind's responsive prefixes (md:, lg:)

## Dependencies

- `astro` - Core framework
- `@tailwindcss/vite` - Tailwind CSS integration
- `@astrojs/mdx` - MDX support
- `rehype-katex` - Math rendering
- `rehype-highlight` - Syntax highlighting
- `remark-math` - Math parsing

## Notes

- No linting/formatting tools configured
- No test framework set up
- Site is statically generated and deployable to any static host

# Caveats

If there is anything unconventional or if there exists certain pitfalls for agents that are not immediately obvious, add them to this section so that future agents will be able to get the task right in one go:

- 