require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  PGUSER,PGPASSWORD, PGHOST, PGPORT,PGDATABASE
} = process.env;

const sequelize = new Sequelize(`postgresql://${{ PGUSER }}:${{ PGPASSWORD }}@${{ PGHOST }}:${{ PGPORT }}/${{ PGDATABASE }}`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
console.log(sequelize.models);
const {City,Property,Publication,Service,User} = sequelize.models

Property.belongsTo(City, { foreignKey: "idCity" });
City.hasMany(Property, { foreignKey: "idCity" });

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  City,
  Property,
  Publication,
  Service,
  User, 
  conection: sequelize,     
};

