import Box from "./examples/Box"

const CONTAINER_STYLE = {
  width: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

export default function App() {
  return (
    <div style={CONTAINER_STYLE}>
      <Box />
      <Box />
      <Box />
    </div>
  )
}
