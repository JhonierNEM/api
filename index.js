const server = require('./src/app.js');
const { conection } = require('./src/db.js');
const {upCitiesApi} = require('./src/controllers/cities/index')
const {UploadProperties,UploadUsers} = require('./src/controllers/others/uploadData')

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
