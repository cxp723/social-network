export const changeValuesInArray = (
  array,
  paramSearched,
  searchedValue,
  paramToChange,
  valueToChange
) => {
  return array.map((obj) => {
    if (obj[paramSearched] === searchedValue) {
      obj[paramToChange] = valueToChange;
    }
    return obj;
  });
};

export const getRandomArr = (arr, elementsCount) => {
  if (arr.length <= elementsCount) {
    return arr;
  } else {
    return arr.sort(() => 0.5 - Math.random()).slice(0, elementsCount);
  }
};
