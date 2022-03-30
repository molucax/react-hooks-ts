import { useRef } from 'react'

export default function UseRef() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  return (
    <input ref={inputRef} />
  )
}
