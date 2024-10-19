import type { Comment } from '@prisma/client';
import { db } from '@/db';

export type CommentAggregationQuery = Comment & {
  user: { name: string | null; image: string | null };
};

export function fetchCommentswithSlug(
  slug: string
): Promise<CommentAggregationQuery[]> {
  return db.comment.findMany({
    where: { post: { topic: { slug } } },
    include: {
      user: { select: { name: true, image: true } },
    },
  });
}

export function fetchCommentswithPostId(
  postId: string
): Promise<CommentAggregationQuery[]> {
  return db.comment.findMany({
    where: { post: { id: postId } },
    include: {
      user: { select: { name: true, image: true } },
    },
  });
}

export function fetchCommentswithSlugAndPostId(
  slug: string,
  postId: string
): Promise<CommentAggregationQuery[]> {
  return db.comment.findMany({
    where: { post: { id: postId, topic: { slug } } },
    include: {
      user: { select: { name: true, image: true } },
    },
  });
}

export function fetchComments(): Promise<CommentAggregationQuery[]> {
  return db.comment.findMany({
    include: {
      user: { select: { name: true, image: true } },
    },
  });
}
