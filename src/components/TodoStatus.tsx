import { useRecoilValue } from "recoil";
import { todoContentState, infoValue } from "../state/todoState";

export const TodoStatus = () => {
  const todoList = useRecoilValue(todoContentState);
  const info = useRecoilValue(infoValue);
  const total: number = todoList.length;

  return (
    <div className="row header-container">
      <p>{`Completed ${info.completed}`}</p>
      <p>{`Uncompleted ${info.notCompleted}`}</p>
      <p>{`Total ${info.total}`}</p>
    </div>
  );
};
