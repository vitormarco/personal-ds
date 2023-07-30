export type SizeType = 'small' | 'medium' | 'large'

export type StyleSizesPropertiesType = {
  height: string
  padding: string | number
  radius: string
}

export type SizesType = Record<SizeType, StyleSizesPropertiesType>
