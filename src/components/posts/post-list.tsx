import { PostAggregationQuery } from '@/db/queries/post';
import { path } from '@/paths';
import Link from 'next/link';
import React from 'react';

type Props = {
  fetchData: () => Promise<PostAggregationQuery[]>;
};

const PostList = async ({ fetchData }: Props) => {
  const postListData = await fetchData();

  const formatedPostInformation = postListData.map(
    (post: PostAggregationQuery) => (
      <Link
        key={post.id}
        className="shadow-sm p-4"
        href={path.viewPost(post.topic.slug, post.id)}
      >
        <h3 className="font-bold ">{post.title}</h3>
        <div className="flex gap10 justify-start text-gray-500">
          <p>By {post.user.name}</p>
          <p>{post._count.comments} Comments</p>
        </div>
      </Link>
    )
  );

  return (
    <div className="w-4/5 flex flex-col gap-4">{formatedPostInformation}</div>
  );
};

export default PostList;
