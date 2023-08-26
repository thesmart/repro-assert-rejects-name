import assert from 'assert/strict';

class MyError extends Error {
  constructor() {
    super("hello");
  }

}

assert(MyError.name);

assert.rejects(() => {
  return new Promise((_, reject) => {
    reject(new MyError());
  });
 }, {name: 'MyError'});
