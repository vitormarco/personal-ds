import { describe, expect, it, vi } from 'vitest'

import Select from '@/components/Select'
import { render, screen, userEvent } from '@/utils/tests'

describe('#Select', () => {
  it('should be able to render a Select', () => {
    render(
      <Select
        id="filter-by"
        label="Filter by:"
        value="newest"
        onChange={() => {}}
      >
        <option value="newest">Newest Releases</option>
        <option value="price">Price</option>
        <option value="curated">Curated</option>
      </Select>,
    )

    expect(
      screen.getByLabelText('Filter by', {
        exact: false,
      }),
    ).toBeTruthy()
    expect(
      screen.getByRole('option', { name: 'Newest Releases', selected: true }),
    ).toBeTruthy()
  })

  it('should allow user to change option', async () => {
    const changeSelected = vi.fn()

    render(
      <Select
        id="filter-by"
        label="Filter by:"
        value="newest"
        onChange={changeSelected}
      >
        <option value="newest">Newest Releases</option>
        <option value="price">Price</option>
        <option value="curated">Curated</option>
      </Select>,
    )

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Price' }),
    )

    expect(changeSelected).toBeCalled()
  })
})
