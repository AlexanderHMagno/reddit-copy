import React from 'react';

type Props = {
  params: {
    slug: string;
    postId: string;
  };
  // searchParams: {};
};

export default function ViewPost({ params }: Props) {
  return <div>{JSON.stringify(params)}</div>;
}
