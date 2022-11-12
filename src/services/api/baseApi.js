const axios = require('axios')

const BASE_URL = ''

module.exports={
    instance: axios.create({
        baseURL: BASE_URL,
    })
}
