const { mkdir, rm } = require('fs/promises');
const SimpleDB = require('../simpledb/simpledb.js');

describe('SimpleDB', () => {
  const rootDir = '../simpledb/newobject';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() =>
      mkdir(rootDir, { recursive: true })
    );
  });

  it('should assign an id property to the object', () => {
    const firstDb = new SimpleDB(rootDir);
    const newObject = {
      name: 'new',
      text: 'random',
    }; //
    //expectation (file after modification of save function)

    return (
      firstDb
        .save(newObject)
        //.save function
        //.get by id function , result in .then
        //toEqual JSON object
        .then(() => expect(newObject.id).toEqual(expect.any(String)))
    );
  });
  it('should get id', () => {
    const firstDb = new SimpleDB(rootDir);
    const newId = newObject.id;
    return firstDb
      .save(newId)
      .then(() => expect(newId).toEqual(expect.any(Number)));
  });
});
