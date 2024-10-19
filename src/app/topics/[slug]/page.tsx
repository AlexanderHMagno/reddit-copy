import React from 'react';
import { Divider } from '@nextui-org/react';
import CreatePostForm from '@/components/posts/create-post-form';
import PostList from '@/components/posts/post-list';
import { fetchPostswithSlug } from '@/db/queries/post';
type Props = {
  params: {
    slug: string;
  };
  // searchParams: {};
};

const page = ({ params }: Props) => {
  return (
    <div className="flex  justify-start">
      <div className="w-3/4">
        <h1 className="font-bold text-2xl">{params.slug}</h1>
        <PostList fetchData={() => fetchPostswithSlug(params.slug)} />
      </div>
      <div className="w-1/4 border-warning-100 shadow-md h-dvh">
        <CreatePostForm slug={params.slug} />
        <Divider className="my-4" />
        <div></div>
      </div>
    </div>
  );
};

export default page;
