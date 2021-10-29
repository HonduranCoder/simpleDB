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
    const newObject = { text: 'Hello world' };
    const simpleDB = new SimpleDB(rootDir);
    //save an object & get by id like line 23
    return simpleDB
      .save(newObject)
      .then(console.log(newObject.id))
      .then(() => simpleDB.get(newObject.id))
      .then((file) => expect(file).toEqual(expect.any(Object)));
    //.then with getbyid function
    //.then with the expect
  });
  it('should return all files', () => {
    const simpleDB = new SimpleDB(rootDir);
    const firsNew = { text: 'first' };
    const secondOld = { text: 'second' };
    const expectation = [
      {
        id: expect.any(String),
        text: expect.any(String),
      },
      {
        id: expect.any(String),
        text: expect.any(String),
      },
    ];
    //save at least two files
    return simpleDB
      .save(firsNew)
      .then(() => simpleDB.save(secondOld))
      .then(() => simpleDB.getAll())
      .then((files) => expect(files).toEqual(expectation));
    //call get(all) function
    //expectation -> array w/an object for each of the files
  });
});
