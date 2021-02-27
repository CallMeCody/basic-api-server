'use strict';

class PersonModel {
  constructor() {
    this.id = 0;
    this.name = "";
    this.db = [];
  }

  
  get(id) {
  
  }
  
  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }
  
    this.db.push(record);
    return record;
  }
  
  update(id, obj) {
  
  }
  
  delete(id) {
  
  }
}


module.exports = PersonModel;