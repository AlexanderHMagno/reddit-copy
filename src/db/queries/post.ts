import type { Post } from '@prisma/client';
import { db } from '@/db';

export type PostAggregationQuery = Post & {
  topic: { slug: string };
  _count: { comments: number };
  user: { name: string | null };
};

export function fetchPostswithSlug(
  slug: string
): Promise<PostAggregationQuery[]> {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      _count: { select: { comments: true } },
      user: { select: { name: true } },
    },
  });
}

export function fetchPosts(): Promise<PostAggregationQuery[]> {
  return db.post.findMany({
    include: {
      topic: { select: { slug: true } },
      _count: { select: { comments: true } },
      user: { select: { name: true } },
    },
  });
}
