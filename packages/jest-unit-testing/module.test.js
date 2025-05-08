import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Divide', () => {
    const expected = 5;
    const got = mut.div(10, 2);
    expect(got).toBe(expected);
});

test('Contains Numbers mix', () => {
    const expected = false;
    const got = mut.containsNumbers("abc123");
    expect(got).toBe(expected);
})

test('Contains Numbers only nums', () => {
    const expected = true;
    const got = mut.containsNumbers("123");
    expect(got).toBe(expected);
})

test('Contains Numbers only letters', () => {
    const expected = false;
    const got = mut.containsNumbers("abc");
    expect(got).toBe(expected);
})

test('Contains Numbers mix', () => {
    const expected = false;
    const got = mut.containsNumbersFixed("abc123");
    expect(got).toBe(expected);
})

test('Contains Numbers only nums', () => {
    const expected = true;
    const got = mut.containsNumbersFixed("123");
    expect(got).toBe(expected);
})

test('Contains Numbers only letters', () => {
    const expected = false;
    const got = mut.containsNumbersFixed("abc");
    expect(got).toBe(expected);
})
