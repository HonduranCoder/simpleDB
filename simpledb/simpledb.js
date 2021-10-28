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
    const newId = shortid.generate();
    newObject.id = newId;
    //stringify the new object (stringy object instead of newObject)
    const stringyObj = JSON.stringify(newObject);
    return writeFile(this.newFolder, stringyObj);
  }

  //get
  get(id) {
    //read the file name that matches the id
    const readIt = readFile(this.newFile, 'utf-8');
    //parse the file
    //return the parsed file
    const newFile = `${id}.json`;
    this.newFolder = path.join(rootDir, newFile);
    return JSON.parse(newFolder);
  }
}
//write file for saving
//read file for file (aynchronous functions), add an id
module.exports = SimpleDB;
