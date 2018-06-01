# React Baby
### Generate a lightweight boilerplate for your full stack React application.

## Getting Started
```bash
npm install -g react-baby
```

## Generating Your Boilerplate
In your cli simply type...
```bash
react-baby
```
This will generate a folder called ``react-baby-boilerplate`` in your cwd.
The next argument after ``react-baby`` will give you the option to name your directory.

For example...
```bash
react-baby my-project
```
will create a folder named ``my-project``.

## Working With Your Boilerplate
Before you can get your local server running, you must...
```bash
npm install
```
After that you can run any of the following three pre-packaged servers, via *npm scripts*...

#### Webpack Dev Server
```bash
npm run dev
```
This command runs ``webpack-dev-server`` and allows for changes to your **front end** to be immediately reflected.

#### Node Dev Server
```bash
npm run start:dev
```
This command runs ``nodemon`` and allows for changes to your **back end** to be immediately reflected.
#### Node Production Server
For production...
```bash
npm run start
```
*All servers run on port **8080** by default*