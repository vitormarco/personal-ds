import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 20px;
    width: 100%;
    background-color: ${theme.color.neutral.white};
    border-radius: ${theme.border.radius.pill};
  `}
`

export const Bar = styled.div<{ $progress: number }>`
  ${({ theme, $progress }) => css`
    height: 100%;
    width: ${$progress}%;
    background-color: ${theme.color.primary.base};
    border-radius: inherit;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    padding: ${theme.spacing.one};
    color: ${theme.color.neutral.black};
  `}
`
