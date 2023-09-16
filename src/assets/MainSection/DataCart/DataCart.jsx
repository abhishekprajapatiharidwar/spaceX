import { useContext } from 'react';
import './DataCart.css';
import { MyContext } from '../../Context/MyContext';

export default function DataCart(props) {
  const { modalshow, setmodalshow, selectedData, setselectedData } = useContext(MyContext);

  const popup = () => {
    setselectedData(props.data);
    setmodalshow(true);
  };

  const backgroundColorStyle = {
    backgroundColor: props.data.status === 'active' ? 'green' : props.data.status === 'retired' || props.data.status === 'destroyed' ? 'red' : props.data.status === 'unknown' ? ' rgb(255, 170, 0)' : '',
  };

  return (
    <>
      <div className="Cart" onClick={popup}>
        <h1 style={backgroundColorStyle}>{props.data.capsule_serial}</h1>
      </div>
    </>
  );
}
