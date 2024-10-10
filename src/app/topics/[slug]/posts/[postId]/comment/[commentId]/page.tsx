import React from 'react';

type Props = {
  params: {
    slug: string;
    postId: string;
    commentId: string;
  };
  // searchParams: {};
};

const commentId = ({ params }: Props) => {
  return <div>{JSON.stringify(params)}</div>;
};

export default commentId;
