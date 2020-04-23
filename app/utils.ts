export const capitalise = (word: string) => {
    return word.toUpperCase();
};

export const createLine = (entity: string, describingWord: string) => {
    return `Never ${capitalise(describingWord)} a ${entity}`;
};
 export const log = (message: string) => {
     console.info(`test ${message}`)
 }
export const add = (firstValue: number, secondValue?: number) =>{
    const steve = firstValue + (secondValue ?? 20);
    return steve
}
export default {
   createLine,
   capitalise,
   log
};
