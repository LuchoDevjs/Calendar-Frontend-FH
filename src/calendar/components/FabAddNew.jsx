import { AiOutlinePlusCircle } from "react-icons/ai";
import { useCalendarStore, useUiStore } from "../../hooks";
import { addHours } from "date-fns";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#1e5128",
      user: {
        _id: "123",
        name: "Luciano",
      },
    });
    openDateModal();
  };

  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        bottom: "25px",
        fontSize: "48px",
        padding: "25px",
        position: "fixed",
        right: "25px",
      }}
      onClick={handleClickNew}
    >
      <AiOutlinePlusCircle color="#1e5128" />
    </button>
  );
};
