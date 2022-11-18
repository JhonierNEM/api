const { Property,City } = require("../../db.js");

const createProperty = async (req, res) => {
  // const { images, services } = req.body;
  try {
    /*
    if (
      !Object.values(req.body).every(Boolean) ||
      !images.length ||
      !services.length
    ) {
      throw new Error("Faltan completar datos");
    }
    */
    const properties = await Property.create(req.body);
    res.status(201).json({ Message: "Propiedad creada", payload: properties });
    
  } catch (err) {
    res.status(401).json({ Error: err.message });
  }
};

const getAllProperties = async (req, res) => {
    try {
      const properties = await Property.findAll();
  
      // if (!properties.length && false) throw new Error("No hay propeidades");
      if (!properties.length) throw new Error("No hay propiedades");
  
      res.status(200).json(properties );
      // res.status(200).json({
      //   Message: "Succes",
      //   payload: [...properties, ...require("../utils/fakeProperties.json")],
      // });
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
};

const findPropertyById = async (req, res) => {
  try {
    const {id} = req.params;

    const property = await Property.findByPk(id);
    if (!property) return res.status(404).json({msg:'NO FOUND'});

    res.status(200).json(property);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

module.exports={
    createProperty,
    getAllProperties,
    findPropertyById
}
