import { useReveal } from '../hooks/useReveal'

// Wraps a section so it plays an animate.css entrance effect once, the
// first time it scrolls into the viewport.
export default function Reveal({ as: Tag = 'div', effect = 'animate__fadeInUp', className = '', children }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? `animate__animated ${effect}` : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
