import { CommentAggregationQuery } from '@/db/queries/comments';
import { Avatar } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

type CommentProps = {
  fetchData: () => Promise<CommentAggregationQuery[]>;
};

const CommentList = async ({ fetchData }: CommentProps) => {
  const data = await fetchData();

  const formatedDataToMoveToComponent = data.map(
    (comment: CommentAggregationQuery) => {
      return (
        <div key={comment.id} className="p-5 m-2 shadow-sm">
          <div className="flex align-middle">
            <Avatar size="sm" src={comment.user.image || ''} />
            <span className="self-center ml-4">{comment.user.name}</span>
          </div>
          <p>{comment.content}</p>
        </div>
      );
    }
  );

  return <div>{formatedDataToMoveToComponent}</div>;
};

export default CommentList;
