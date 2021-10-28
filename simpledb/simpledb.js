const { writeFile, readFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

class SimpleDB {
  constructor(rootDir) {
    const newFile = `${shortid.generate()}.json`;
    this.newFolder = path.join(rootDir, newFile);
  }

  //save
  save(newObject) {
    //add the id to the new object
    console.log(newObject);
    const newId = shortid.generate();
    newObject.id = newId;
    console.log(newObject);
    //stringify the new object (stringy object instead of newObject)
    const stringyObj = JSON.stringify(newObject);
    //const readIt = readFile(this.newFolder, newId);
    return writeFile(this.newFolder, stringyObj);
  }
}
//write file for saving
//read file for file (aynchronous functions), add an id
module.exports = SimpleDB;
