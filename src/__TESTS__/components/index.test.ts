function sum(...numbers: Array<number>) {
  return numbers.reduce((total, number) => total + number, 0)
}

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('should be return zero when not pass values', () => {
    expect(sum()).toBe(0)
  })
})
