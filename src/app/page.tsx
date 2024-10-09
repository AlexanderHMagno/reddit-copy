import { CreateTopicForm } from '@/components/topics/createTopicForm';

export default function Home() {
  return (
    <div className="flex min-w-96 justify-around">
      <div>
        <h1>Posts</h1>
      </div>
      <div>
        <h1>Topics</h1>
        <CreateTopicForm />
      </div>
    </div>
  );
}
