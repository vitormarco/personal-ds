import * as S from './styles'

interface IProgressBarProperties {
  progress: number
}

const ProgressBar = ({ progress }: IProgressBarProperties) => {
  return (
    <S.Container>
      <S.Bar
        $progress={progress}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <S.Label>{progress}%</S.Label>
      </S.Bar>
    </S.Container>
  )
}

export default ProgressBar
