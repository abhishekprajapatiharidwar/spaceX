import { createContext, useState } from "react";

export const MyContext=createContext();

const MyProvider=({children})=>{
    const [CapsuleData,setCapsuleData]=useState([]);
    const [filteredCapsules, setFilteredCapsules] = useState([]); 
    const [modalshow,setmodalshow]=useState(false);
    const [selectedData,setselectedData]=useState([]);
    return(
        <MyContext.Provider value={{CapsuleData,setCapsuleData,filteredCapsules, setFilteredCapsules,modalshow,setmodalshow,
        selectedData,setselectedData}}>
            {children}
        </MyContext.Provider>
    )
}
export default MyProvider;