import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import questions from "../data.json";

let data = [];

const Context = createContext(questions);
export const ContextProvider = function ({ children }) {
  const [state, setstate] = useState(0);
  const [value, setValue] = useState(undefined);
  const [show, setShow] = useState(0);
  const path = useLocation();

  /////////////////////////////////////////           other     ////////////////////////////

  useEffect(() => {
    setstate(0);
    setValue(undefined);
  }, [path.pathname]);

  function add() {
    let all = document.querySelectorAll("input");
    let heading = document.querySelector("#text");
    heading.style.position = "relative";
    heading.style.transition = "2s";
    heading.style.right = "500%";
    let count = 0;
    let stop = setInterval(() => {
      if (count === all.length) {
        clearInterval(stop);
      } else {
        all[count].style.position = "relative";
        all[count].style.transition = "600ms";
        all[count].style.top = "-500%";
        all[count].style.right = "-500%";
        count++;
      }
    }, 250);
  }

  /////////////////////////////////////////           tab screen        ////////////////////////////

  const handelclick = () => {
    add();
    setTimeout(() => {
      setstate(state + 1);
    }, 1000);
    handelchange();
  };

  const prevhandelclick = () => {
    add();
    setTimeout(() => {
      setstate(state - 1);
    }, 1000);
    handelchange();
  };

  const handelchange = (correct, id) => {
    if (correct !== undefined) data.push(correct);
    setValue(correct);
    let inp = document.querySelectorAll("input");
    let newinp = Array.from(inp);
    newinp.filter((value) => {
      if (value.id == id) {
        let a = document.getElementById(id);
        a.style.backgroundColor = "#125566";
        a.style.color = "white";
      } else {
        value.style.backgroundColor = "white";
        value.style.color = "black";
      }
      if (show === 0) {
        if (state === part1Len) {
          setShow(show + 1);
          value.style.pointerEvents = "none";
        }
      } else if (show === 1) {
        if (state === part2Len) {
          setShow(show + 1);
          value.style.pointerEvents = "none";
        }
      } else if (show === 3) {
        if (state === part3Len) {
          setShow(show + 1);
          value.style.pointerEvents = "none";
        }
      } else if (show === 4) {
        if (state === part4Len) {
          setShow(show + 1);
          value.style.pointerEvents = "none";
        }
      }
    });
  };

  let part1Len = questions[0].part1.length - 1;
  let part2Len = questions[1].part2.length - 1;
  let part3Len = questions[2].part3.length - 1;
  let part4Len = questions[3].part4.length - 1;

  /////////////////////////////////////////           tab screen last components       ////////////////////////////

  return (
    <Context.Provider
      value={{
        questions,
        handelclick,
        state,
        prevhandelclick,
        handelchange,
        value,
        show,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function Usethem() {
  return useContext(Context);
}

// const handelclick3 = () => {
//   add();
//   setTimeout(() => {
//     setNewstate(newstate + 1);
//   }, 1000);
//   handelchange();
// };

// const prevhandelclick3 = () => {
//   add();
//   setTimeout(() => {
//     setNewstate(newstate - 1);
//   }, 1000);
//   handelchange();
// };

// const handelchange3 = (correct, id) => {
//   if (correct !== undefined) data.push(correct);
//   setValue(correct);
//   let inp = document.querySelectorAll("input");
//   let newinp = Array.from(inp);
//   newinp.filter((value) => {
//     if (value.id == id) {
//       let a = document.getElementById(id);
//       a.style.backgroundColor = "#125566";
//       a.style.color = "white";
//     } else {
//       value.style.backgroundColor = "white";
//       value.style.color = "black";
//       if (newstate === 24) {
//         setMshow(Mshow + 1);
//       }
//     }
//   });
// };
