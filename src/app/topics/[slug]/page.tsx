import React from 'react';

type Props = {
  params: {
    slug: string;
  };
  // searchParams: {};
};

const page = (props: Props) => {
  return <div>{props.params.slug}</div>;
};

export default page;
