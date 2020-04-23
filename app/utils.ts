export const capitalise = (word: string) => {
    return word.toUpperCase();
};

export const createLine = (entity: string, describingWord: string) => {
    return `Never ${capitalise(describingWord)} a ${entity}`;
};

export default {
   createLine,
   capitalise
};
