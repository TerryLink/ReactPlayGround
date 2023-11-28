import React, { useState,useEffect } from "react";

function UserInfo({ userId }) {
    const [userDetails, setUserDetails] = useState();
  
    const a = [{"email":"test.com","name":"abc"},{"email":"aaa.com","name":"ccc"},{"email":"bbb.com","name":"ddd"}]
    useEffect(()=>{
    if (userId === 0) {
        setUserDetails(a[0])
    } else if (userId === 1) {
        setUserDetails(a[1])
    } else if (userId === 2) {
        setUserDetails(a[1])
    } else {
        setUserDetails(a[1])
    }
    },[userId])
  
    return (
      <div>
        {userDetails ? (
          <div>
            <h1>{userDetails.name}</h1>
            <p>Email: {userDetails.email}</p>
            {/* 更多用户信息 */}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    );
  }

export default UserInfo