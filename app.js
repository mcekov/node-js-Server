const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


const expressHandlebars = require('express-handlebars');

app.engine('hbs', expressHandlebars({
    defaultLayout: 'layout',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
    return res.render('home/index', {
    	title: 'Test Html Page'
	});
});


app.listen(port, (err) => {
    if(err) {
        return console.log('Something happened', err);
    }

    console.log(`Server is up on ${port}`);
});

app.use((err, request, response, next) => {
    // log the error, for now just console.log
    console.log(err);

    response.status(500).send('Something broke!')
});
