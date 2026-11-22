import { useState } from 'react'

// Shows the image, or a styled placeholder with a label if it fails to load.
export default function SafeImage({ src, alt, label, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`${className} img-fallback`} role="img" aria-label={alt}>
        <span aria-hidden="true">{label}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
