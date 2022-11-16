const {instance} = require('./apis/baseApis.js');

module.exports={
    getCitiesApi: function (){
        return instance.get('municipios?campos=id,nombre,%20provincia.nombre&max=5000')
    },
}