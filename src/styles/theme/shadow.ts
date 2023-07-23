const shadow = (color?: string) => ({
  grounded: `0 2px 4px ${color ?? 'hsla(0, 0%, 0%, 0.1)'}`,
  low: `0 4px 8px ${color ?? 'hsla(0, 0%, 0%, 0.1)'} `,
  medium: `0 6px 12px ${color ?? 'hsla(0, 0%, 0%, 0.15)'}`,
  high: `0 8px 16px ${color ?? 'hsla(0, 0%, 0%, 0.2)'}`,
})

export default shadow
