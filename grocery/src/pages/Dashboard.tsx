import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/store.hook";
import { removeAuth } from "../store/auth.store";
import Button from "../ui/Button";

const Dashboard = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(removeAuth());
    navigate("/auth");
  };

  return (
    <>
      {auth.name} | {auth.email}
      <br />
      <Button onClick={handleClick}>Log Out</Button>;
    </>
  );
};

export default Dashboard;
