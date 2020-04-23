import utils from './utils';

const loop =(count: number, phrase: string) => {
    [...new Array(count)].forEach(() => {
        console.info(phrase);
    });
};

const app =() => {
    const line = utils.createLine("Lemon", "Anger");
    loop(3,line);
}

export default app;