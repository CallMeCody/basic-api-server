'use strict';

class PersonModel {
  constructor() {
    this.id = 0;
    this.name = "";
    this.db = [];
  }


  get(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
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
    if(id) {
      return obj
    }
  }
  
  delete(id) {
    if(id){
      this.db.splice(2, 1);
    }
  }
}


module.exports = PersonModel;