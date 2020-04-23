# Steps

<!-- Press "crtl + /" to make comments -->
<!-- Space things out with lines for-example-type-like-this -->
<!-- Links work like this but dont preview on visual studio -->
[test link to steps](#steps) 

<hr>

#### steps to set up node stuff

1. Start a new folder without spaces or capitals.
2. In terminal type `npm init -y` to create a package file.
3. Make a mark down file for notes (new file with .md extention).
4. In terminal type `npm i typescript` to create a package lock file.
5. In terminal type `.\node_module.bin\tsc` (if an unauthorisedaccess error persists open powershell in admininstator mode and run 
`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`).
6. Add the following code to your tsconfig file above compiler options (tells ts to include everything in the relevant block to compile it).
    ````json
    "includes": [
        "app/**/*.ts"
    ],
    ````
7. create `.gitignore` file
8. add the following to .gitignore
    ```gitignore
    #  node
    node_modules

    # typescript
    app/**/*.js
    ```
9. Create new folders (Bin and App)
10. Add `index.ts` to App folder and project name (eg. testfoldervcs) to Bin folder with no extention.
11. input the following in project Bin folder
    ```js
    #!/usr/bin/env node
    const app = require('../app').default

    try {
        app();
    } catch (error) {
        console.error(error.message)
    }
    ```
12.  enter into index.ts, the application.
        ```js
        const app =() => {

        }
        const app2 = function app () {

        };

        export default app;
        ```
        The `() => {}` is an anonymous function, use `function app () {}` for specific function.


13. run `./node_modules/.bin/tsc` to compile
14. `git add -A` to add code to git. Then go to source Control and Commit what you need committed.
15. Add code to index ts, eg `console.info ("Guessssss Whoooo?")` Save and run `./node_modules/.bin/tsc` then `node .\bin\testfoldervcs` or project name equivalent.
16. `"start":"node ./bin/testfoldervcs"` gets added to package.json in scripts below "test"
17. `"prestart":"./node_modules/.bin/tsc",` gets added above "start" in package.json.
18. `npm run start` runs the program adding `--silent` to the end prevents the terminal from showing the processes and just shows the output.
19. Change license in package.json to MIT. Other licenses can be found at TLDRlicense.
20. Fill out author field `firstname lastname <email@domain> (website)`

## Day 2, Creation of Program.
1. in Index.ts add `import utils from './utils';` to line 1
2. Create file `utils.ts` in appfolder.
3. fill it out as
    ```js
    export const capitalise = (word: string) => {
        return word.toUpperCase();
    
    };
    export const createLine = (entity: string, describingWord: string) => {
        return `Never ${capitalise(describingWord)} a ${entity}`;
    };

    export default {
        createLine
    };
    ``` 
4. In index.ts replace lines 2 onwards with 
    ```js
    const loop =(count: number, phrase: string) => {
        [...new Array(count)].forEach(() => {
            console.info(phrase);
        });
    };

    const app =() => {
        const line = utils.createLine("Lemon", "Anger");
        loop(3,line);
    };

    export default app;
    ```
The resulting code will take any string attached to capitalise and capitalise the entire string. It will create the variable createLine within `utils.ts` and assign entity to a string in the position before the comma, and the describing word after the comma. Which in `index.ts` is Lemon and Anger. it then returns as
`Never ${capitalise(describingWord)} a ${entity};` Which would become Never ANGER (as it was capitalised) a Lemon.
In `Index.ts` we have a looped array that takes the number of loops from the first number on line 11 and loops the 'line' which outputs the createline return the number of times specified. which results in Never ANGER an Lemon repeated 3 times.
## Day 2 Testing
1. Install Ava with `npm install --save-dev ava`
2. Create folder in main directory called test, create file called utils.test.ts
3. Enter `import test from 'ava';` into `utils.test.ts`
4. Install `npm install --save-dev ts-node`
5. in `package.json` create new field beneath `"devDependencies"`
    ```js
    "ava":{
    "extensions": ["ts"],
    "require":["ts-node/register"]
     }
6. Create test in `utils.test.ts` enter the following
    ```js
    import {capitalise} from '../app/utils';

    test('capitalise a string', (t) => {
    t.is(capitalise("themoooon"), "THEMOOOON");
    t.is(capitalise("themoooon"), "NOTTHEMOOOON");
    })
    ```
    This imports capitalise from `utils.ts` using {} to find it as it was a specific function and not a default. to access it as a default. you must add it as a default in `utils.ts`replace capitalise in `utils.test.ts` with utils and add utils. before both capitalise's in the test string.
    for example

    ```js
    import utils from '../app/utils';
       
    test('capitalise a string', (t) => {
        t.is(utils.capitalise("themoooon"), "THEMOOOON");
         t.is(utils.capitalise("themoooon"), "NOTTHEMOOOON");
    })
    ```
7. Replace what is in `test` under `scripts` in `package.json`with `"./node_modules/.bin/ava"`, you are now able to run a test with `npm test`in the terminal.

### adding a project
1. add the following to `utils.ts`
    ```js
     export const log = (message: string) => {
     console.info(`test ${message}`)
    }
    export const add = (firstValue: number, secondValue: number) =>{
        const steve = firstValue + secondValue;
        return steve
    }
    ```
2. add the following to index.ts beneath the array, replacing `console.info(phrase)` with
    ```js
        const result =add(9,10);
        log(result.toString());
    });
    ```
    also ammend line 1 to be
    ```js
    import utils,{log,add} from './utils';
    ```
    What this does is imports the log and add functions from the `./utils` file. add requires the numbers from 9,10 in `index.ts` and outputs it as result. result is then taken by log. which requires a message `log(result.toString())` the message is in the brackets, `result.toString` it takes the result of 9 = 10, as solved in the add function with in `utils.ts` which is a number, and turns it into a string. Log takes the message result, adds test before it, and outputs it to console.
3. replacing the end of `secondValue` with ? in the add fuction and adding ?? 20 after the `secondValue` in steve function. it will replace the second value in `index.ts` if it isn't valid
4.  

### Github commits and ettiquite

1. install commitizen with `npm install commitizen -g` and run `commitizen init cz-conventional-changelog --save-dev --save-exact`afterwards. the `-g` means commitizen is installed globally, and will not need to be installed in another project on this device.
2. now entering `npx git-cz`will being up a selection, navigatable by up and down arrows to select the correct option for your commit. Pressing enter will send you to the short scope of your commit, for example i changed a section in my steps. Therefore my scope was steps, press enter and add in a short description of what you are changing. then press enter and add in a long description, answer the next questions with Y or N depending on the answer and press enter to move on.


### npm
`--save-dev` is used for dev dependencies only. wont be included when built.

### Markdown

```js
    ```js
    // Put javascript code here.
    var name = "steve";
    ```
```
### Typescript
`() =>` is better than `function()`unless function is specifically neded

### Javascript

### Git ettiquite 
<!-- A properly formed Git commit subject line should always be able to complete the following sentence: -->

<!-- If applied, this commit will your subject line here -->