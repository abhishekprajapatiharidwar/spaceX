import { createContext, useState } from "react";

// Create a new context called MyContext
export const MyContext = createContext();

// Create a context provider component called MyProvider
const MyProvider = ({ children }) => {
  // State to hold Capsule data
  const [CapsuleData, setCapsuleData] = useState([]);

  // State to hold filtered Capsules
  const [filteredCapsules, setFilteredCapsules] = useState([]);

  // State to control the visibility of a modal
  const [modalshow, setmodalshow] = useState(false);

  // State to store selected data
  const [selectedData, setselectedData] = useState([]);

  return (
    // Provide the defined states and functions to the context
    <MyContext.Provider
      value={{
        CapsuleData,
        setCapsuleData,
        filteredCapsules,
        setFilteredCapsules,
        modalshow,
        setmodalshow,
        selectedData,
        setselectedData,
      }}
    >
      {/* Render the child components wrapped by this provider */}
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
