import React from 'react'

import * as S from './styles'

interface ISelectProperties {
  id: string
  value?: string | number | readonly string[]
  onChange: (value: unknown) => void
  children: React.ReactNode
}

const Select = ({ id, value, onChange, children }: ISelectProperties) => {
  return (
    <S.Wrapper>
      <S.NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </S.NativeSelect>
    </S.Wrapper>
  )
}

export default Select
