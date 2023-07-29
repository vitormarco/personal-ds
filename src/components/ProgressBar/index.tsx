import { useMemo } from 'react'

import { SizeType } from '@/types/ProgressBar/styles.types'

import * as S from './styles'

interface IProgressBarProperties {
  progress: number
  size?: SizeType
}

const ProgressBar = ({ progress, size = 'large' }: IProgressBarProperties) => {
  const preventLowerThanZeroAndHigherThanHundred = useMemo(() => {
    if (progress < 0) {
      return 0
    }

    if (progress > 100) {
      return 100
    }

    return progress
  }, [progress])

  return (
    <S.Wrapper
      role="progressbar"
      aria-valuenow={preventLowerThanZeroAndHigherThanHundred}
      aria-valuemin={0}
      aria-valuemax={100}
      $size={size}
    >
      <S.BarWrapper>
        <S.Bar $progress={preventLowerThanZeroAndHigherThanHundred} />
      </S.BarWrapper>
    </S.Wrapper>
  )
}

export default ProgressBar
