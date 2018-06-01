# React Baby
### Generate a lightweight boilerplate for your full stack React application.
<img style="width: 20%; margin:2%;" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" >
<img style="width: 20%; margin:2%;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" >
<img style="width: 20%; margin:2%;" src="https://avatars1.githubusercontent.com/u/2105791?s=200&v=4" >
<img style="width: 20%; margin:2%;" src="https://avatars2.githubusercontent.com/u/29239447?s=200&v=4" >
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