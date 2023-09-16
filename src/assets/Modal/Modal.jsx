import { useContext, useRef, useEffect } from "react";
import "./Modal.css";
import { MyContext } from "../Context/MyContext";
import CloseIcon from "@mui/icons-material/Close";

export default function Modal() {
  const { modalshow, setmodalshow, selectedData, setselectedData } =
    useContext(MyContext);
  const bodyRef = useRef(document.body);

// Assuming selectedData.original_launch contains the date string
const launchDateTime = new Date(selectedData.original_launch);

// Extracting date and time
const launchDate = launchDateTime.toLocaleDateString(); // Formats date as "MM/DD/YYYY"
const launchTime = launchDateTime.toLocaleTimeString(); // Formats time as "HH:MM:SS AM/PM"

  useEffect(() => {
    if (modalshow) {
      bodyRef.current.style.overflow = "hidden";
    } else {
      bodyRef.current.style.overflow = "auto"; // Restore default scrolling
    }

    // Cleanup by restoring default scrolling when the component unmounts
    return () => {
      bodyRef.current.style.overflow = "auto";
    };
  }, [modalshow]);
  return (
    <div className="ModalSection">
      <div className="ModalContent">
        <div className="closebtnSection">
          <button
            onClick={() => {
              setmodalshow(false);
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <h1>{selectedData.capsule_serial}</h1>
        <div className="Detailsbox">
          <div id="CapulesText">
            <p>
              {" "}
              <span>Capsule ID: </span>
              {selectedData.capsule_id}
            </p>
            <p>
              <span>Status: </span>
               <span className={selectedData.status === "active" ? "green-text" : selectedData.status === "retired" || selectedData.status === "destroyed" ? "red-text" : selectedData.status === "unknown" ? "yellow-text" : ""}>
    {selectedData.status}
  </span>
            </p>
            <p>
              <span>Date of Launch: </span>
              {launchDate}
            </p>
            <p>
              <span>Time of Launch: </span>
              {launchTime}
            </p>
            <p>
              <span>Type: </span>
              {selectedData.type}
            </p>
            <p>
              <span>Launch Unix: </span>
              {selectedData.original_launch_unix}
            </p>
            <p>
              <span>Reuse: </span>
              {selectedData.reuse_count}
            </p>
            <p>
              <span>Details: </span>{" "}
              {selectedData.details ? (
                selectedData.details
              ) : (
                <span>No details available</span>
              )}
            </p>
          </div>
          <div id="CapulesMission">
            <h1>Mission</h1>
            <ol type="1">
            {selectedData.missions.length > 0 ? (
      selectedData.missions.map((item) => {
        return (
          <div className="missions" key={item.name}>
            {item.name}
            <p>Flight: {item.flight}</p>
          </div>
        );
      })
    ) : (
      <p>No mission found</p>
    )}
              </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
