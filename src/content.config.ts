import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const CATEGORIES = ['faith', 'job-talk', 'community-care', 'testimonies', 'black-history', 'technology'] as const;

const articles = defineCollection({
  // Exclude _notes.md and any underscore-prefixed files
  loader: glob({ pattern: '[^_]*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    authorImage: z.string().optional(),
    category: z.enum(CATEGORIES),
    date: z.coerce.date(),
    excerpt: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const advertisers = defineCollection({
  loader: glob({ pattern: '[^_]*.json', base: './src/content/advertisers' }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    url: z.string().url(),
    carousel: z.union([z.literal(1), z.literal(2)]),
  }),
});

const churchDirectory = defineCollection({
  loader: glob({ pattern: '[^_]*.json', base: './src/content/church-directory' }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    url: z.string().url().optional(),
  }),
});

const pastMagazines = defineCollection({
  loader: glob({ pattern: '[^_]*.json', base: './src/content/past-magazines' }),
  schema: z.object({
    title: z.string(),
    edition: z.string(),
    date: z.string(),
    coverImage: z.string(),
    flipUrl: z.string().url(),
  }),
});

export const collections = {
  articles,
  advertisers,
  'church-directory': churchDirectory,
  'past-magazines': pastMagazines,
};
