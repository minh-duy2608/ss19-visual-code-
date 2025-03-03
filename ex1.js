let month = +prompt("Nhập vào tháng");
let message;

if (month < 1 || month > 12) {
    message = "Tháng không hợp lệ";
} else if (month === 2) {
    message = `Tháng ${month} có 28 ngày hoặc 29 ngày (năm nhuận)`;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    message = `Tháng ${month} có 30 ngày`;
} else {
    message = `Tháng ${month} có 31 ngày`;
}

alert(message);
