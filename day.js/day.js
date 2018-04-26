const dayjs = require('dayjs');

const Months = {
  1:  "Jan",
  2:  "Feb",
  3:  "Mar",
  4:  "Apr",
  5:  "May",
  6:  "Jun",
  7:  "Jul",
  8:  "Aug",
  9:  "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
};

let date = `${Months[dayjs()["$M"]]} ${dayjs()["$D"]}, ${dayjs()["$y"]}`;

console.log(date);
