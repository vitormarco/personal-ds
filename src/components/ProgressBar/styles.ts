import styled, { css } from 'styled-components'

import { SizesType, SizeType } from '@/types/ProgressBar/styles.types'
import { Theme } from '@/types/styled-components'

const SIZES = (theme: Theme): SizesType => ({
  small: {
    height: theme.spacing.half,
    padding: 0,
    radius: theme.border.radius.half,
  },
  medium: {
    height: theme.spacing.one,
    padding: 0,
    radius: theme.border.radius.half,
  },
  large: {
    height: theme.spacing.two,
    padding: theme.spacing.half,
    radius: theme.border.radius.sm,
  },
})

export const Bar = styled.div<{ $progress: number }>`
  ${({ theme, $progress }) => css`
    width: ${$progress}%;

    background-color: ${theme.color.primary.base};
    border-radius: ${theme.border.radius.half} 0 0 ${theme.border.radius.half};
  `}
`

export const Wrapper = styled.div<{ $size: SizeType }>`
  ${({ theme, $size }) => css`
    background-color: ${theme.color.opacity.gray.one};
    box-shadow: inset ${theme.shadow().grounded};
    border-radius: ${SIZES(theme)[$size as SizeType].radius};
    padding: ${SIZES(theme)[$size as SizeType].padding};

    ${Bar} {
      height: ${SIZES(theme)[$size as SizeType].height};
    }
  `}
`

export const BarWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.half};

    /* Triam off corners when progress bar is near-full */
    overflow: hidden;
  `}
`
