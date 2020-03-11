const express = require('express')
const app = express();
const hbs = require('hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
require('./hbs')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        name: 'World'
    });

})
app.get('/about', (req, res) => {
    res.render('about')
})
app.listen(3000, () => {
    console.log('Listen request by the port 3000');
})