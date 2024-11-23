function binarySearch(list, search) {
  let start = 0;
  let end = list.length - 1;
  let attempt = 0;
  
  while (start <= end) {
    attempt += 1;

    let currentMiddle = Math.floor((start + end) / 2);
    let guess = list[currentMiddle];

    if (guess === search) {
      console.log(`Attempt: ${attempt}`);
      return guess;
    } else if (guess > search) {
      end = currentMiddle - 1;
    } else {
      start = currentMiddle + 1;
    }
  }

  console.log(`Attempt: ${attempt}`);
  return -1;
}
