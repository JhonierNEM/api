const { City } = require("../../db.js");
const { getCitiesApi } = require("../../services/index");

const upCities = async () => {
  try {
    const cities = await getCitiesApi();
    return cities.data.municipios.map((element) => {
      return {
        idCity: element.id,
        city: element.nombre,
        provincia: element.provincia.nombre,
      };
    });
  } catch (error) {
    throw error;
  }
};

const upCitiesApi = async () => {
  try {
    const citiesMyApi = await City.findAll();
    if (!citiesMyApi?.length) {
      const cities = await upCities();
      await City.bulkCreate(cities)
      return
    }
  } catch (error) {
    throw error;
  }
};

const getCities = async (req, res) => {
  try {
    let cities = await City.findAll();
    if(!cities?.length) return res.status(404).json({msg:'NO FOUND'});
    res.status(200).json({cities});
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

module.exports = {
  upCitiesApi,
  getCities,
};
