import React from 'react';
import { db } from '@/db';
import type { Topic } from '@prisma/client';
import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { path } from '@/paths';

type Props = {};

const TopicsLists = async (props: Props) => {
  const listTopics = await db.topic.findMany();

  const styleTopics = listTopics.map((topic: Topic) => {
    return (
      <Link key={topic.id} href={path.viewTopic(topic.slug)}>
        <Chip color="secondary">{topic.slug}</Chip>
      </Link>
    );
  });

  return (
    <div>
      <h1 className="font-bold my-4">Topics</h1>
      <div className="flex gap-2 flex-wrap">{styleTopics}</div>
    </div>
  );
};

export default TopicsLists;
