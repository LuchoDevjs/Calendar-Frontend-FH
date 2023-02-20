import { BsCalendar3 } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuthStore } from "../../hooks";

export const Navbar = () => {
  const { startLogout, user } = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <BsCalendar3 color="white" />
        &nbsp;{" "}
        {user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()}
      </span>
      <button className="btn btn-outline-danger">
        <span onClick={startLogout}>
          <IoLogOutOutline /> Salir
        </span>
      </button>
    </div>
  );
};
