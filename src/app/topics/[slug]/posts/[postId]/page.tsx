import CommentCreateForm from '@/components/coments/comment-create-form';
import CommentList from '@/components/coments/comment-list';
import { db } from '@/db';
import { fetchCommentswithPostId } from '@/db/queries/comments';
import { Divider } from '@nextui-org/react';
import React from 'react';

type Props = {
  params: {
    slug: string;
    postId: string;
  };
  // searchParams: {};
};

export default async function ViewPost({ params: { postId, slug } }: Props) {
  const data = await db.post.findFirst({ where: { id: postId } });

  return (
    <div className="shadow-md p-5">
      <h1 className="font-bold mb-5">{data?.title}</h1>
      <p>{data?.content}</p>
      <Divider className="my-5" />

      <CommentCreateForm postId={data?.id} slug={slug} />
      <CommentList fetchData={() => fetchCommentswithPostId(postId)} />
    </div>
  );
}
