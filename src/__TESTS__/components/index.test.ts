function sum(...numbers: Array<number>) {
  return numbers.reduce((total, number) => total + number, 0)
}

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
