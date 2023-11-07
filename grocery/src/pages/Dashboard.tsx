import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/store.hook";
import Button from "../ui/Button";
import { useLocalStorageState } from "../hooks/localStorage.hook";

const Dashboard = () => {
  const auth = useAppSelector((state) => state.auth);
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setValue } = useLocalStorageState(null, 'auth')
  const handleClick = () => {
    setValue('');
    navigate("/auth");
  };

  return (
    <>
      {auth.userInfo?.email}
      <Button onClick={handleClick}>Log Out</Button>;
    </>
  );
};

export default Dashboard;
