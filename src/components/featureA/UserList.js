import React from "react";
import UserInfo from "./UserInfo";
function UserList() {
    const userIds = [1, 0, 2]; // 用户ID数组
  
    return (
      <div>
        {userIds.map((id, index) => (
          <UserInfo key={index} userId={id} />
        ))}
      </div>
    );
  
}

export default UserList