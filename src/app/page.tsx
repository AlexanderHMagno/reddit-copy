import { CreateTopicForm } from '@/components/topics/createTopicForm';

export default function Home() {
  return (
    <div className="flex min-w-96 justify-around">
      <div>
        <h1 className="font-bold">Posts</h1>
      </div>
      <div>
        <CreateTopicForm />
      </div>
    </div>
  );
}
