import assert from 'assert/strict';

class MyError extends Error {
  constructor() {
    super("hello");
  }

}

assert.equal(MyError.name, 'MyError');
assert.equal(new MyError().constructor.name, 'MyError');

// This fails! It should pass...
assert.rejects(() => {
  return new Promise((_, reject) => {
    reject(new MyError());
  });
 }, {name: 'MyError'});
