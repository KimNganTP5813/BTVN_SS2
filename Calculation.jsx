import React from "react";

export default function Calculation() {
  // Hàm cộng
  function cong(a, b) {
    return a + b;
  }

  // Hàm trừ
  function tru(a, b) {
    return a - b;
  }

  // Hàm nhân
  function nhan(a, b) {
    return a * b;
  }

  // Hàm chia
  function chia(a, b) {
    if (b === 0) {
      return "Không thể chia cho 0";
    }
    return a / b;
  }

  // Thực hiện phép tính và hiển thị kết quả
  let a = 10;
  let b = 10;

  document.write(`${a} + ${b} = ${cong(a, b)}<br>`);
  document.write(`${a} - ${b} = ${tru(a, b)}<br>`);
  document.write(`${a} * ${b} = ${nhan(a, b)}<br>`);
  document.write(`${a} / ${b} = ${chia(a, b)}<br>`);
}
