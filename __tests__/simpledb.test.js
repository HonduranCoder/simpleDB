const { mkdir, rm } = require('fs/promises');
const SimpleDB = require('../simpledb.js');

describe('SimpleDB', ()=>{
    const rootDir = '../simpledb/simpledb.js';

    beforeEach(() => {
        return rm(rootDir, { force: true, recursive: true }).then(() =>
          mkdir(rootDir, { recursive: true })
        );
      });

      it('should assign an id property to the object', ()=> {
          const firstDb= new SimpleDB(rootDir); 
          const newFile = {
            name: 'new',
            text: 'random'
          };
          
          
          //expectation (file after modification of save function)

          return firstDb
          .save(newFile)
          //.save function 
          //.get by id function , result in .then
          //toEqual JSON object
          .then(() => expect(whateverID).toEqual(whateverID));
  });
