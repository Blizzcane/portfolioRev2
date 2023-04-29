import Spline from "@splinetool/react-spline";

const ThreeD = () => {
  return (
    <Spline
      style={{
        width: "300px",
        height: "200px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        overflow: "hidden",
      }}
      scene="https://prod.spline.design/2hJzOCI-73VSaSFD/scene.splinecode"
    />
  );
};

export default ThreeD;
