import React from 'react'
import './Syngenta.css';

function Syngenta() {
   
    let object = {1: "#d4e8d3",2: "#fee4cc ",3: "#5d05e9",4: "#d9e8fb",5: "#ADD8E6"};
    
    const [listOfColor, setListOfColor] = React.useState([]);
    const [enterNum, setEnterNum] = React.useState("");
    const [inputCircle, setInputCircle] = React.useState([]);
    const [original, setOriginal] =React.useState([]);

    React.useEffect(() => {
      function intervalRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      const listRandomColor = [];
      while (listRandomColor.length < 5){
        const intRandom = intervalRandom(1, 5);
        if (listRandomColor.indexOf(intRandom) === -1) {
          listRandomColor.push(intRandom);
        }
        setListOfColor(listRandomColor);
        setOriginal(listRandomColor);
      }
    }, []);




    const handleCircle = (e) => {
      e.preventDefault();
     
      let newList = [];

      for (var i = 0; i < listOfColor.length; i++) {
        if (i !== Number(enterNum) - 1) {
          newList.push(listOfColor[i]);
        } else {
          setInputCircle([...inputCircle, listOfColor[i]]);
        }
      }
      setListOfColor(newList);
    };

    const ballon = (e, idx, el) => {
      let newList = inputCircle.filter((d, i) => {
        return i !== idx;
      });

      setInputCircle(newList);

      let newColorslist = [];
      for (var j = 0; j < original.length; j++) {
        if (!newList.includes(original[j])) {
          newColorslist.push(original[j]);
        }
      }
      setListOfColor(newColorslist);
    };


    return (
      <div>
        <h1 className="title">Syngenta-Assignment</h1>
        <div className="main">
          <div className="empty">
            {inputCircle.map((element, i) => {
              return (
                <div
                  onClick={(e) => ballon(e, i, element)}
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: `${object[element]}`,
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                ></div>
              );
            })}
          </div>
          <div className="circle">
            {listOfColor.map((element, i) => {
              return (
                <div
                  key={i}
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: `${object[element]}`,
                    borderRadius: "50%",
                    marginBottom: "30px",
                  }}
                ></div>
              );
            })}
          </div>
          <div className="inputshoot">
            <input
              type="number"
              value={enterNum}
              placeholder="Enter between 1 to 5"
              className="enterinput"
              onChange={(e) => setEnterNum(e.target.value)}
            />
            <button type="submit" onClick={(e) => handleCircle(e)}>
              SHOOT
            </button>
          </div>
        </div>
      </div>
    );
}

export default Syngenta;