const noop = function () {
    return this;
};

// A sum type for error handling
class Validation {
}

class Success extends Validation {
    constructor(value) {
        super();
        this.value = value;
    }
}

class Failure extends Validation {
    constructor(value) {
        super();
        this.value = value;
    }
}

// Applicative
Validation.prototype.of = Validation.of = value => new Success(value);

Success.prototype.of = Success.of = value => new Success(value);

Failure.prototype.of = Failure.of = value => new Failure(value);

Success.prototype.isSuccess = true;

Success.prototype.isFailure = false;

Failure.prototype.isFailure = true;

Failure.prototype.isSuccess = false;

// Apply
Success.prototype.ap = function (x) {
    return x.map(this.value);
};

Failure.prototype.ap = noop;

// Functor
Success.prototype.map = function (func) {
    return new Success(func(this.value));
};

Failure.prototype.map = noop;

// Chain
Success.prototype.chain = function (func) {
    return func(this.value);
};

Failure.prototype.chain = noop;

module.exports = { Success, Failure, Validation };