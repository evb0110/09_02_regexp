import Validator from '../src/js/Validator';

test('name with spaces inside, should pass', () => {
  const name = 'ab c-';
  const result = Validator.validateUsername(name);
  expect(result).toBe(true);
});

test('name with double spaces inside, should fail', () => {
  const name = 'a  bc';
  const result = Validator.validateUsername(name);
  expect(result).toBe(false);
});

test('name with space at the beginning, should fail', () => {
  const name = ' abc';
  const result = Validator.validateUsername(name);
  expect(result).toBe(false);
});

test('name with space at the end, should fail', () => {
  const name = 'abc ';
  const result = Validator.validateUsername(name);
  expect(result).toBe(false);
});

test('name with non-letter symbols, should fail', () => {
  const name = 'john5';
  const result = Validator.validateUsername(name);
  expect(result).toBe(false);
});

test('tab symbol inside, should fail', () => {
  const name = 'helloworld';
  const result = Validator.validateUsername(name);
  expect(result).toBe(false);
});
