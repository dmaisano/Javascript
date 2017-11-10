let num_count_down = (num) => {
  if(num == 0)
    return;

  console.log(num);
  num_count_down(num - 1);
}

num_count_down(10);
