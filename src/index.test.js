const {
  applyBusinessRules,
  generateOutput,
  main,
  processApplication,
  validateInputData
} = require('./index');

describe('function::validateInputData', () => {
  test('Invalid Inputs should short circuit the compose', () => {
    const input = {
      firstName: 'Rahul',
      lastName: 'Ballal'
    };
    const result = validateInputData(input);
    expect(result.isSuccess).toBe(false);
    expect(result.isFailure).toBe(true);
  });
});
