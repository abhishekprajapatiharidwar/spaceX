import { useContext } from 'react';
import './DataCart.css';
import { MyContext } from '../../Context/MyContext';

export default function DataCart(props) {
  // Accessing state and context from MyContext
  const { modalshow, setmodalshow, selectedData, setselectedData } = useContext(MyContext);

  // Function to open a popup when a data cart is clicked
  const popup = () => {
    // Set the selected data and show the modal
    setselectedData(props.data);
    setmodalshow(true);
  };

  // Determine the background color based on the data's status
  const backgroundColorStyle = {
    backgroundColor:
      props.data.status === 'active'
        ? 'green'
        : props.data.status === 'retired' || props.data.status === 'destroyed'
        ? 'red'
        : props.data.status === 'unknown'
        ? 'rgb(255, 170, 0)'
        : '', // Set a default color if status is not recognized
  };

  return (
    <>
      {/* Data cart container with click event to open a popup */}
      <div className="Cart" onClick={popup}>
        {/* Display the capsule serial as the title with a background color */}
        <h1 style={backgroundColorStyle}>{props.data.capsule_serial}</h1>
      </div>
    </>
  );
}
