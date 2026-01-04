import { UserInfo } from '../UserInfo/UserInfo';

type TodoInfoProps = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
    user: {
      name: string;
      email: string;
    };
  };
};

export const TodoInfo = ({ todo }: TodoInfoProps) => (
  <article
    data-id={todo.id}
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={todo.user} />
  </article>
);
