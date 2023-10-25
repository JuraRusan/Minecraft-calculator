import React, {useEffect, useState} from "react";
import {items_name_array} from "../../сrafting-calculator/array_name";

import "./Redactor.scss";

const Redactor = () => {

  const [isToggle, setIsToggle] = useState(true);

  const toggleState = () => {
    setIsToggle((prevToggle) => !prevToggle);
  };

  const [one_item, setOneItem] = useState('');
  const [two_item, setTwoItem] = useState('');
  const [three_item, setThreeItem] = useState('');
  const [four_item, setFourItem] = useState('');
  const [five_item, setFiveItem] = useState('');
  const [six_item, setSixItem] = useState('');
  const [seven_item, setSevenItem] = useState('');
  const [eight_item, setEightItem] = useState('');
  const [nine_item, setNineItem] = useState('');
  const [outText, setOutText] = useState('');
  const [outTextTemplate, setOutTextTemplate] = useState('undefined');
  const [out, setOut] = useState('');
  const [qty, setQty] = useState(1);

  const handleButtonClick = () => {
    const template = `
  {
    1: ${one_item ? `"` + one_item + `"` : 'null'},
    2: ${two_item ? `"` + two_item + `"` : 'null'},
    3: ${three_item ? `"` + three_item + `"` : 'null'},
    4: ${four_item ? `"` + four_item + `"` : 'null'},
    5: ${five_item ? `"` + five_item + `"` : 'null'},
    6: ${six_item ? `"` + six_item + `"` : 'null'},
    7: ${seven_item ? `"` + seven_item + `"` : 'null'},
    8: ${eight_item ? `"` + eight_item + `"` : 'null'},
    9: ${nine_item ? `"` + nine_item + `"` : 'null'},
    out: ${out ? `"` + out + `"` : 'null'},
    qty: ${qty ? qty : 1}
  }, // ${out ? `"` + out + `"` : 'null'}`;

    setOutText((prevOutText) => prevOutText + template);

    if (isToggle === true) {
      setOneItem('');
      setTwoItem('');
      setThreeItem('');
      setFourItem('');
      setFiveItem('');
      setSixItem('');
      setSevenItem('');
      setEightItem('');
      setNineItem('');
      setOut('')
      setQty(1)
    }
  };

  useEffect(() => {
    setOutTextTemplate(`{
    1: ${one_item ? `"` + one_item + `"` : 'null'},
    2: ${two_item ? `"` + two_item + `"` : 'null'},
    3: ${three_item ? `"` + three_item + `"` : 'null'},
    4: ${four_item ? `"` + four_item + `"` : 'null'},
    5: ${five_item ? `"` + five_item + `"` : 'null'},
    6: ${six_item ? `"` + six_item + `"` : 'null'},
    7: ${seven_item ? `"` + seven_item + `"` : 'null'},
    8: ${eight_item ? `"` + eight_item + `"` : 'null'},
    9: ${nine_item ? `"` + nine_item + `"` : 'null'},
    out: ${out ? `"` + out + `"` : 'null'},
    qty: ${qty ? qty : 1}
  }, // ${out ? `"` + out + `"` : 'null'}`)
  }, [one_item, two_item, three_item, four_item, five_item, six_item, seven_item, eight_item, nine_item, out, qty])

  return (
    <div className="redactor">
      <datalist id="datalist_id">
        {items_name_array.map((el, i) =>
          <option key={i}>{el.type}</option>
        )}
      </datalist>
      <div className="rowAll">
        <div className="rowIn">
          <input list="datalist_id" type="text" value={one_item} defaultValue={one_item} onChange={(e) => setOneItem(e.target.value)}/>
          <input list="datalist_id" type="text" value={two_item} defaultValue={two_item} onChange={(e) => setTwoItem(e.target.value)}/>
          <input list="datalist_id" type="text" value={three_item} defaultValue={three_item} onChange={(e) => setThreeItem(e.target.value)}/>
        </div>
        <div className="rowIn">
          <input list="datalist_id" type="text" value={four_item} defaultValue={four_item} onChange={(e) => setFourItem(e.target.value)}/>
          <input list="datalist_id" type="text" value={five_item} defaultValue={five_item} onChange={(e) => setFiveItem(e.target.value)}/>
          <input list="datalist_id" type="text" value={six_item} defaultValue={six_item} onChange={(e) => setSixItem(e.target.value)}/>
        </div>
        <div className="rowIn">
          <input list="datalist_id" type="text" value={seven_item} defaultValue={seven_item} onChange={(e) => setSevenItem(e.target.value)}/>
          <input list="datalist_id" type="text" value={eight_item} defaultValue={eight_item} onChange={(e) => setEightItem(e.target.value)}/>
          <input list="datalist_id" type="text" value={nine_item} defaultValue={nine_item} onChange={(e) => setNineItem(e.target.value)}/>
        </div>
        <div className="rowIn out">
          <input list="datalist_id" type="text" value={out} defaultValue={out} onChange={(e) => setOut(e.target.value)}/>
          <input type="number" value={qty} defaultValue={qty} onChange={(e) => setQty(e.target.value)}/>
          <button onClick={toggleState}>{isToggle ? 'true' : 'false'}</button>
        </div>
      </div>
      <button className="actions" onClick={handleButtonClick} style={{color: "black", width: "150px", fontSize: "12px", margin: "8px auto"}}>add
      </button>
      <div className="textareaRow">
        <textarea value={outTextTemplate}/>
        <textarea value={outText}/>
      </div>
    </div>
  )
}

export default Redactor;