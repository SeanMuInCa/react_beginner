import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function Home() {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/login");
  };
  return (
    <div className="my-20">
      <h1 className="text-center">Home Page</h1>
      <div className="flex justify-center mt-10">
        <Button type="primary" onClick={handleClick}>
          Back to Login
        </Button>
      </div>
    </div>
  );
}

export default Home;
