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
In `Index.ts` we have a looped array It takes the number of loops from the first number on line 11 and loops the 'line' which outputs the createline return the number of times specified. which results in Never ANGER an Lemon repeated 3 times.
## Day 2 Testing

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