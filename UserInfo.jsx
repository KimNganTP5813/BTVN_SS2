import React from "react";

export default function UserInfo() {
  const user = {
    name: "Nguyễn Văn A",
    gender: "Nam",
    birthday: "06/03/2024",
    email: "vna@gmail.com",
    address: "Thanh Xuân, Hà Nội",
  };

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>Họ và tên: {user.name}</li>
        <li>Giới tính: {user.gender}</li>
        <li>Ngày sinh: {user.birthday}</li>
        <li>Email: {user.email}</li>
        <li>Địa chỉ: {user.address}</li>
      </ul>
    </div>
  );
}
