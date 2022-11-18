console.log('Hola Mundo');
const server = require('./app');
const { conection } = require('./db');
const {upCitiesApi} = require('./ccontrollers/cities/index')
const {UploadProperties,UploadUsers} = require('./controllers/others/uploadData')

const force = true

// Syncing all the models at once.
conection.sync({ force:force }).then(() => {
  server.listen(3001, async() => {
    await upCitiesApi()
    force && UploadProperties()
    force && UploadUsers()
    console.log('%s listening at 3001'); 
    });
});