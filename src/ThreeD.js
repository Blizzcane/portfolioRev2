import Spline from "@splinetool/react-spline";

const ThreeD = () => {
  return (
<Spline 
  style={{ 
    width: "300px", 
    height: "200px", 
    border: "1px solid #ccc",
    borderRadius: "15px",
    overflow: "hidden"
  }}  
  scene="https://prod.spline.design/Hw2DcW9yMjXhTl5u/scene.splinecode" 
/>

  );
};

export default ThreeD;
