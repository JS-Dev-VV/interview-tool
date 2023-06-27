export const getRandomNumber = (min: number, max: number) => {
    let result = Math.floor(Math.random() * (max - min + 1)) + min
    return result;
}

export const getUniqueNumArray = (min: number, max: number, arrayLength: number) => {
    let array: number[] = [];
    while (array?.length < arrayLength) {
        let num = getRandomNumber(min, max);
        if (!array.includes(num)) { array.push(num) }
    }
    return array;
}