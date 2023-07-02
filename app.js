const express = require('express');
const app = express();
const path = require('path');
// const exphbs = require('express-handlebars')

const { engine } = require('express-handlebars');
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');

app.use(express.static(path.join(__dirname, 'public')));

// app.engine('handlebars', exphbs({defaultLayout: 'home'}))
// app.set('view engine', 'handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', home);
app.use('/admin', admin);

app.listen(3333, () => {
    console.log(`listening on port 3333`)
})