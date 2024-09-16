import { useRef, useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"

const TOOLTIP_STYLE = {
  position: "absolute",
  pointerEvents: "none",
  left: 0,
  top: 0,
  height: "20px",
  border: "1px solid black",
  borderRadius: "4px",
  backgroundColor: "lightgrey",
  padding: "5px 20px",
  color: "black",
  zIndex: 2,
}

export default function Tooltip({ children, targetRect }) {
  const ref = useRef(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect()
    setTooltipHeight(height)
  }, [])

  let tooltipX = 0
  let tooltipY = 0
  if (targetRect !== null) {
    tooltipX = targetRect.left
    tooltipY = targetRect.top - tooltipHeight
    if (tooltipY < 0) {
      // if target element's "top" is less than the tooltip's height, it won't fit above
      console.info("Tooltip didn't fit above, so placing it below.")
      tooltipY = targetRect.bottom
    } else {
      console.info("Tooltip fits above.")
    }
  }

  return createPortal(
    <div
      style={{
        ...TOOLTIP_STYLE,
        transform: `translate3d(${tooltipX}px, ${tooltipY}px, 0)`,
      }}
      ref={ref}
    >
      {children}
    </div>,
    document.body
  )
}
