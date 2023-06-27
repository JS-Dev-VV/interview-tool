export const getRandomNumber = (min: number, max: number) => {
    let result = Math.floor(Math.random() * (max - min + 1)) + min
    return result;
}