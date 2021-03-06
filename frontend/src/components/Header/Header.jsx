import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateToDiary = () => {
    navigate("/diary", {replace: true});
  };
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="mx-40">
      <div className="flex justify-between w-full content-center h-16 items-center">
        <h1 className="text-4xl font-lato font-oleo">Voyage Notes</h1>
        <div className="flex w-48 justify-between">
          <Button text="Log in" />
          <Button text="Sign in" />
        </div>
      </div>
      <div className="flex w-48 justify-between content-center h-16">
        <button
          className="py-1 mb-0 mt-auto text-md hover:bg-secondary bg-primary font-bold text-white w-20 h-8 rounded-t"
          onClick={navigateToHome}
        >
          Map
        </button>
        <button
          className="py-1 mb-0 mt-auto text-md hover:bg-secondary bg-primary font-bold text-white w-20 h-8 rounded-t"
          onClick={navigateToDiary}
        >
          Diary
        </button>
      </div>
    </div>
  );
};

export default Header;
