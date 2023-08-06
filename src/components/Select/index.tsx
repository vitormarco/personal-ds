import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

import getDisplayedValue from './helpers'
import * as S from './styles'

interface ISelectProperties {
  id: string
  label: string
  value?: string | number | readonly string[]
  onChange: (value: string) => void
  children: React.ReactNode
}

const Select = ({
  id,
  label,
  value,
  onChange,
  children,
}: ISelectProperties) => {
  const displayedValue = getDisplayedValue(children, value)

  return (
    <S.Label htmlFor={id}>
      {label}
      <S.Wrapper>
        <S.NativeSelect
          id={id}
          value={value}
          onChange={({ target }) => onChange(target.value)}
        >
          {children}
        </S.NativeSelect>
        <S.PresentationalBit>
          {displayedValue}
          <S.IconWrapper>
            <FaChevronDown key="chevron-down" size={16} />
          </S.IconWrapper>
        </S.PresentationalBit>
      </S.Wrapper>
    </S.Label>
  )
}

export default Select
