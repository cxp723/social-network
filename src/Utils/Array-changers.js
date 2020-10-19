export const changeValuesInArray = (array, paramSearched, searchedValue, paramToChange, valueToChange) => {
    return array.map((obj) => {
        if (obj[paramSearched] === searchedValue) {
            obj[paramToChange] = valueToChange;
        }
        return obj;
    })
}

export const getRandomArr = (arr, elementsCount) => {
    if (arr.length <= elementsCount) {
        return arr
    } else {
        let arrToChange = [...arr];
        let resultArr = [];
        for (let i = 0; i < elementsCount; i++) {
            let randomIndex = Math.floor(Math.random() * (arrToChange.length));
            resultArr.push(arrToChange.splice(randomIndex, 1));
        }
        return resultArr;
    }
}