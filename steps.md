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
14. `git add -A` to add code to git.

### Code blocks


```js 
    ```js
    // Put javascript code here.
    var name = "steve";
    ```
```