# React Baby
### Generate a lightweight boilerplate for your full stack React application.
<div>
<img align="left" width="23%" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" >
<img align="left" width="23%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" >
<img align="left" width="22%" src="https://avatars1.githubusercontent.com/u/2105791?s=200&v=4" >
<img align="left" width="22%" src="https://avatars2.githubusercontent.com/u/29239447?s=200&v=4" >
</div>

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