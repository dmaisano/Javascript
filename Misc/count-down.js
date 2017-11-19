// let num_count_down = (num) => {
//   if(num == 0)
//     return;

//   console.log(num);
//   num_count_down(num - 1);
// }

let num_count_down = (num) => {
  console.log(num);

  num != 0 ? num_count_down(num - 1) : false;
}

num_count_down(10);
