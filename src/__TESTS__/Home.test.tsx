import { describe, expect, it } from 'vitest'

import sum from '@/utils/sum'

describe('#sum', () => {
  it('returns 0 with no numbers', () => {
    expect(sum()).toBe(0)
  })
})
