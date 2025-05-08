import React from "react";
import useAppContext from "../hooks/contextCostomHook";

const UserComponent: React.FC = () => {
  const { user, setUser } = useAppContext();
  const { theme, setTheme} = useAppContext();
  
  return (
    <div>
      <h2>ユーザー情報</h2>
      <p>名前: {user.name}</p>
      <p>年齢: {user.age}</p>
      <button onClick={() => setUser({ name: "花子", age: 30 })}>
        名前を変更する
      </button>
      <p>テーマ色: {theme}</p>
      <button onClick={() => setTheme("dark")}>
        テーマの変更
      </button>
    </div>
  );
};
  
export default UserComponent;  