import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: "12px", // default for smaller screens
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: "20px",
        }}
        className="sm:text-[14px]" // larger font size for larger screens
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
