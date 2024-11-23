function binarySearch(list, search) {
  const newList = Array.from(new Set(list.sort((a, b) => a - b))); // Remove duplicate and sort

  let start = 0;
  let end = newList.length - 1;
  let attempt = 0;
  
  while (start <= end) {
    attempt += 1;

    let currentMiddle = Math.floor((start + end) / 2);
    let guess = newList[currentMiddle];

    console.log(list.sort((a, b) => a - b));
    console.log(newList);
    console.log(guess);

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

const list = [1,2,5,7,4,3,8,9,10,2,6];
console.log(binarySearch`${list, 2}`);
