const axios = require('axios')

const BASE_URL = "https://apis.datos.gob.ar/georef/api/"

module.exports={
    instance: axios.create({
        baseURL: BASE_URL,
    })
}
