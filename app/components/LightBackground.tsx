import '../../styles/components/lightBackground.css'

export default function LightBackground({
  variant = 1,
  animated = true,
}: {
  variant?: 1 | 2 | 3 | 4
  animated?: boolean
}) {
  return (
    <div
      className={`light-bg variant-${variant} ${animated ? 'animated' : ''}`}
      aria-hidden
    />
  )
}
