const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

const graphqlHTTP = require('express-graphql');
//import schema from './schema';
const publicPath = path.join(__dirname + '/../public');
app.use('/', express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(publicPath);
});


// const rawData = JSON.parse(fs.readFileSync('./books-test-collection.json', 'utf8'));
// const inStock = rawData.filter(el=>el.active);
// const prodLength = rawData.length;
// const root = {
//     getBooks: (data) => {
//         let start = data.page*10 - 10;
//         let query = data.active ? inStock : rawData;
//         var res = [];
//         for (var i = start; i < start + 10; i++) {
//             res.push(query[i]);
//         }
//         return res;
//     },
//     searchBooks: (data) => {
//         let query = data.search.toLowerCase();

//         var res = [];
//         for (var i = 0; i < prodLength; i++) {
//             if (rawData[i].title.toLowerCase().indexOf(query) != -1) {
//                 res.push(rawData[i]);
//             }
//             if (res.length >= 10) {
//                 break;
//             }
//         }
//         return res;
//     }
// }



// app.use('/api', graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
// }))

app.listen(8000, () => {
    console.log('server up n running on port 8000!');
})