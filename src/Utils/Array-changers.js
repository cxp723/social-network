export const changeValuesInArray = (array, paramSearched, searchedValue, paramToChange, valueToChange) => {
    return array.map((obj) => {
        if (obj[paramSearched] === searchedValue) {
            obj[paramToChange] = valueToChange;
        }
        return obj;
    })
}