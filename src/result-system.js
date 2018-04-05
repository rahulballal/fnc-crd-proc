class Result {
  constructor (value = {}) {
    this.value = value;
  }

  getValue () {
    return this.value;
  }
}

class Success extends Result { constructor (value) { super(); } }
class Fail extends Result { constructor (value) { super(); } }

const isSuccess = (object = {}) => (object instanceof Success);
const isFail = (object = {}) => (object instanceof Fail);

module.exports = { success: (value) => new Success(value), fail: (value) => new Fail(value), isSuccess, isFail };
