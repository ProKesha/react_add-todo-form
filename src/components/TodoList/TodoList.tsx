import { TodoInfo } from '../TodoInfo/TodoInfo';

type TodoListProps = {
  todos: Array<{
    id: number;
    title: string;
    completed: boolean;
    user: {
      name: string;
      email: string;
    };
  }>;
};

export const TodoList = ({ todos }: TodoListProps) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
