import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

export const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  appearance: none;
`

export const PresentationalBit = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.neutral.base};
    background-color: ${theme.color.opacity.gray.one};
    font-size: 1rem;
    padding: ${theme.spacing.one} ${theme.spacing.two};
    padding-right: ${theme.spacing.six};
    border-radius: ${theme.border.radius.sm};

    ${NativeSelect}:focus + & {
      outline: ${theme.border.width.hairline} dotted hsl(0, 0, 13%);
      outline: ${theme.border.width.thick} auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
      color: ${theme.color.neutral.black};
    }
  `}
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 8px;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
  width: fit-content;
  height: fit-content;
`

export const Label = styled.label`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing.half};
  `}
`
