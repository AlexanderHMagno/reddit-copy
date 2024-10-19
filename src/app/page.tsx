import { CreateTopicForm } from '@/components/topics/createTopicForm';
import TopicsLists from '@/components/topics/TopicsLists';
import { fetchPosts } from '@/db/queries/post';
import { Divider } from '@nextui-org/react';
import PostList from '@/components/posts/post-list';

export default function Home() {
  return (
    <div className="flex  justify-start">
      <div className="w-3/4">
        <h1 className="font-bold">Posts</h1>
        <PostList fetchData={() => fetchPosts()} />
      </div>
      <div className="w-1/4">
        <CreateTopicForm />
        <Divider className="my-4" />
        <TopicsLists />
      </div>
    </div>
  );
}
