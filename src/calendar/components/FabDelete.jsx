import { BiTrash } from "react-icons/bi";
import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () => {
    startDeletingEvent();
  };

  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        bottom: "25px",
        fontSize: "30px",
        padding: "25px",
        position: "fixed",
        left: "25px",
        display: hasEventSelected ? "" : "none",
      }}
      onClick={handleDelete}
    >
      <BiTrash color="#dc3545" />
    </button>
  );
};
