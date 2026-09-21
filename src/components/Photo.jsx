import { useState } from 'react'

// Renders an image, falling back to a brand-colored gradient block if the
// file is missing (e.g. no Unsplash images were fetched for this demo).
export default function Photo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-brand to-brand-dark ${className}`}
        role="img"
        aria-label={alt}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  )
}
