import React from 'react';

type Props = {
  params: {
    slug: string;
    postId: string;
  };
  // searchParams: {};
};

const ViewPost = ({ params }: Props) => {
  return <div>{JSON.stringify(params)}</div>;
};

export default ViewPost;
