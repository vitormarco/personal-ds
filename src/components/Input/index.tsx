import React from 'react'
import { FiSearch } from 'react-icons/fi'

import VisuallyHidden from '../VisuallyHidden'
import * as S from './styles'

interface ITextInputProperties
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  sizes?: 'small' | 'large'
  customStyles?: React.CSSProperties
  leftIcon?: React.ReactNode
}

const TextInput = ({
  sizes = 'small',
  customStyles = {},
  label,
  leftIcon = <FiSearch />,
  ...rest
}: ITextInputProperties) => {
  return (
    <S.Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <S.IconWrapper sizes={sizes}>{leftIcon}</S.IconWrapper>
      <S.TextInput {...rest} style={customStyles} sizes={sizes} />
    </S.Wrapper>
  )
}

export default TextInput
