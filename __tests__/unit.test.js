// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// tests for isPhoneNumber
test('valid phone number 1', () => {
  expect(isPhoneNumber('(858)098-1234')).toBe(true);
});
test('valid phone number 2', () => {
  expect(isPhoneNumber('858-123-5678')).toBe(true);
});
test('invalid phone number 1', () => {
  expect(isPhoneNumber('8580981234')).toBe(false);
});
test('invalid phone number 2', () => {
  expect(isPhoneNumber('85893367ab')).toBe(false);
});

// tests for isEmail
test('valid email 1', () => {
  expect(isEmail('hello@gmail.com')).toBe(true);
});
test('valid email 2', () => {
  expect(isEmail('hello@ucsd.edu')).toBe(true);
});
test('invalid email 1', () => {
  expect(isEmail('@gmail.com')).toBe(false);
});
test('invalid email 2', () => {
  expect(isEmail('hellogmail.com')).toBe(false);
});

// tests for isStrongPassword
test('strong password 1', () => {
  expect(isStrongPassword('adsfFEWu')).toBe(true);
})
test('strong password 2', () => {
  expect(isStrongPassword('cbCd')).toBe(true);
})
test('weak password 1', () => {
  expect(isStrongPassword('A')).toBe(false);
})
test('weak password 2', () => {
  expect(isStrongPassword('cbCda@aaiudsfd')).toBe(false);
})

// tests for isDate
test('valid date 1', () => {
  expect(isDate('10/12/2023')).toBe(true);
})
test('valid date 2', () => {
  expect(isDate('1/3/2023')).toBe(true);
})
test('invalid date 1', () => {
  expect(isDate('10-12-2023')).toBe(false);
})
test('invalid date 2', () => {
  expect(isDate('100/3/2023')).toBe(false);
})

// tests for isHexColor
test('valid color 1', () => {
  expect(isHexColor('#AFA')).toBe(true);
})
test('valid color 2', () => {
  expect(isHexColor('#12AB60')).toBe(true);
})
test('invalid color 1', () => {
  expect(isHexColor('#123A4G')).toBe(false);
})
test('invalid color 2', () => {
  expect(isHexColor('#1234')).toBe(false);
})