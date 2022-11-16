const {Property,User} = require('../../db')
const {dataProperties,dataUsers} = require('../../utils/data/fakeData')

const UploadUsers = async () => {
    try {
        await User.bulkCreate(dataUsers);
    } catch (error) {
        throw error
    }
  };
  
  const UploadProperties = async () => {
    try {
      await Property.bulkCreate(dataProperties);
      return
    } catch (error) {
      throw error
    }
  };

module.exports = {
    UploadUsers,
    UploadProperties
};