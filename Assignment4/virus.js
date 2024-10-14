function deleteInvalids(arr) {
    const resultArray = arr.filter(item => typeof item === 'number' && !isNaN(item));
  
    return resultArray;
  }
  const inputArray = [NaN, 1, 12, 0, -1, undefined];
  const result = deleteInvalids(inputArray);
  
  console.log(result);
  