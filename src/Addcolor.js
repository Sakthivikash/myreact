import { useState } from 'react';


export function Addcolor() {
  const [color, setcolor] = useState('pink');
  const styles = {
    background: color,
  };
  const style1 = {
    display: "grid",
    justifyContent: "center",
    margin: "20px",
  };
  const [colorlist, setcolorlist] = useState(["blue", "orange", "pink", "yellow"]);
  return (
    <div id='color-box'>
      <h1 className="title">Color Game</h1>
    <div className="color" style={style1}>
      
      <input type="text"
        id="clr"
        style={styles}
        onChange={(event) => setcolor(event.target.value)} />
      <button type="button" onClick={() => {
        setcolorlist([...colorlist, color]);
      }}>Add Color</button>
      {colorlist.map((e) => (<Colorbox color={e} />))}
    </div>
  </div>
    

  );
}
function Colorbox({ color }) {
  const Style = {
    background: color,
    height: '25px',
    width: '200px',
    marginTop: '10px',
  };
  return (
    <div style={Style}></div>
  );
}
