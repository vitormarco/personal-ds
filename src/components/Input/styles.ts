import { css, styled } from 'styled-components'

import dsTheme from '@/styles/theme'

type StylesPropertiesType = {
  fontSize: string
  iconSize: number
  borderThickness: number
  height: number
}

type StylesType = Record<'small' | 'large', StylesPropertiesType>

const STYLES: StylesType = {
  small: {
    fontSize: dsTheme.typography.font.size.xxs,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: dsTheme.typography.font.size.xs,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
}

export const Wrapper = styled.label`
  ${({ theme }) => css`
    display: block;
    position: relative;
    color: ${theme.color.neutral.base};

    &:hover {
      color: ${theme.color.neutral.black};
    }
  `}
`

export const IconWrapper = styled.div<{ sizes: 'small' | 'large' }>`
  ${({ theme, sizes }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: ${STYLES[sizes as 'small' | 'large'].iconSize}px;

    svg {
      color: ${theme.color.neutral.base};
    }

    ${Wrapper}:has(:hover) & {
      svg {
        color: ${theme.color.neutral.black};
      }
    }
  `}
`

export const TextInput = styled.input<{ sizes: 'small' | 'large' }>`
  ${({ sizes, theme }) => css`
    width: 100%;
    height: ${STYLES[sizes as 'small' | 'large'].height / 16}rem;
    font-size: ${STYLES[sizes as 'small' | 'large'].fontSize};
    border: none;
    border-bottom: ${STYLES[sizes as 'small' | 'large'].borderThickness}px solid
      ${theme.color.neutral.black};
    padding-left: ${STYLES[sizes as 'small' | 'large'].height / 16}rem;
    color: inherit;
    font-weight: ${theme.typography.font.weight.bold};
    outline-offset: 2px;

    &::placeholder {
      font-weight: 400;
      color ${theme.color.neutral.light};
    }
  `}
`
