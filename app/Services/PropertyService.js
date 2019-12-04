'use strict'

const Property = use("App/Models/Property");

class PropertyService {
  async all() {

    const properties = await Property.all();

    return properties;
  }

  async getById(id) {
    const property = await Property.findOrFail(id)

    await property.load('images')

    return property
  }
}

module.exports = PropertyService;
