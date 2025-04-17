import React from 'react';

function Calculator() {
  const a = 10;
  const b = 10;

  // Các hàm tính toán
  const cong = (a, b) => a + b;
  const tru = (a, b) => a - b;
  const nhan = (a, b) => a * b;
  const chia = (a, b) => {
    return b === 0 ? "Không thể chia cho 0" : a / b;
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>Kết quả phép tính:</h2>
      <p>{a} + {b} = {cong(a, b)}</p>
      <p>{a} - {b} = {tru(a, b)}</p>
      <p>{a} * {b} = {nhan(a, b)}</p>
      <p>{a} / {b} = {chia(a, b)}</p>
    </div>
  );
}

export default Calculator;
