import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

import getDisplayedValue from './helpers'
import * as S from './styles'

interface ISelectProperties {
  id: string
  value?: string | number | readonly string[]
  onChange: (value: unknown) => void
  children: React.ReactNode
}

const Select = ({ id, value, onChange, children }: ISelectProperties) => {
  const displayedValue = getDisplayedValue(children, value)

  return (
    <S.Wrapper>
      <S.NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </S.NativeSelect>
      <S.PresentationalBit>
        {displayedValue}
        <S.IconWrapper>
          <FaChevronDown key="chevron-down" size={16} />
        </S.IconWrapper>
      </S.PresentationalBit>
    </S.Wrapper>
  )
}

export default Select
