const { writeFile, readFile, readdir } = require('fs/promises');
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
const shortid = require('shortid');

class SimpleDB {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }

  //save
  save(newObject) {
    //add the id to the new object
    const newId = shortid.generate();
    newObject.id = newId;
    const newFile = `${newId}.json`;
    this.newFolder = path.join(this.rootDir, newFile);
    //stringify the new object (stringy object instead of newObject)
    const stringyObj = JSON.stringify(newObject);
    return writeFile(this.newFolder, stringyObj);
  }

  //get
  get(id) {
    const newFile = `${id}.json`;
    this.file = path.join(this.rootDir, newFile);
    //read the file name that matches the id
    const parsedFile = readFile(this.file, 'utf8').then((file) =>
      JSON.parse(file)
    );
    //parse the file
    //return the parsed file
    return parsedFile.catch((error) => {
      if (error.code === 'ENOENT') {
        return null;
      }
      throw error;
    });
  }

  //getAll()
  async getAll() {
    //got all the files in thje directory
    const allFiles = await readdir(this.rootDir);
    const parsedFiles = await Promise.all(
      //getting the root dir & files
      //reading the files and parsing the files
      allFiles.map((file) => {
        this.file = path.join(this.rootDir, file);
        return readFile(this.file, 'utf-8').then((file) => JSON.parse(file));
      })
    );
    return parsedFiles;
  }
}
//write file for saving
//read file for file (aynchronous functions), add an id

module.exports = SimpleDB;
