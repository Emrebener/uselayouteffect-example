import { useState, useRef } from "react"
import Tooltip from "./Tooltip"

const BOX_STYLE = {
  border: "2px solid darkblue",
  backgroundColor: "darkblue",
  color: "white",
  borderRadius: "5px",
  padding: "3px",
  margin: "10px",
  width: "140px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export default function Box() {
  const [targetRect, setTargetRect] = useState(null)
  const ref = useRef(null)

  return (
    <>
      <div
        style={BOX_STYLE}
        ref={ref}
        onPointerEnter={() => {
          const rect = ref.current.getBoundingClientRect()
          setTargetRect({
            left: rect.left,
            top: rect.top,
            bottom: rect.bottom,
          })
        }}
        onPointerLeave={() => {
          setTargetRect(null)
        }}
      >
        Hover over me!
      </div>

      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>Tooltip💡</Tooltip>
      )}
    </>
  )
}
