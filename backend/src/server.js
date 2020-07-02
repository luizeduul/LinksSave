const app = require('./app');
const db = require('./models/index');

db.sequelize.sync().then(() => {
    app.listen(3333, () => {
        console.log('Server is running')
    });
})

