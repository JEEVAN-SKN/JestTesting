const { areCaseSensitiveAnagrams } = require('./anagram');

// Test Case 1:

test('Check if "listen" and "silent" are case-sensitive anagrams', () => {
  expect(areCaseSensitiveAnagrams('listen', 'silent')).toBe(true);
});

// Test Case 2:

test('Check if "hello" and "world" are case-sensitive anagrams', () => {
  expect(areCaseSensitiveAnagrams('hello', 'world')).toBe(false);
});

// Test Case 3:

test('Check if "Astronomer" and "Moon Starer" are case-sensitive anagrams', () => {
  expect(areCaseSensitiveAnagrams('Astronomer', 'Moon Starer')).toBe(false);
});

// Test Case 4:

test('Check if "debit card" and "bad credit" are case-sensitive anagrams', () => {
  expect(areCaseSensitiveAnagrams('debit card', 'bad credit')).toBe(true);
});

// Test Case 5:

test('Check if 123 and "321" are case-sensitive anagrams', () => {
  expect(areCaseSensitiveAnagrams(123, '321')).toBe(false);
});


