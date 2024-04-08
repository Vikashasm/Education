import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import questions from "../data.json";

let data = [];

const Context = createContext(questions);

export const ContextProvider = function ({ children }) {
  const [state, setstate] = useState(0);
  const [value, setValue] = useState(undefined);
  const [show, setShow] = useState(0);
  const [Mshow, setMshow] = useState(0);
  const path = useLocation();
  const [newstate, setNewstate] = useState(0);

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
  function Madd() {
    let all = document.querySelectorAll("input");
    let heading = document.querySelector("#text1");
    heading.style.position = "relative";
    heading.style.transition = "400ms";
    heading.style.right = "500%";
    let count = 0;
    let stop = setInterval(() => {
      if (count === all.length) {
        clearInterval(stop);
      } else {
        all[count].style.position = "relative";
        all[count].style.transition = "400ms";
        all[count].style.top = "-500%";
        all[count].style.right = "-500%";
        count++;
      }
    }, 100);
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
      if (state === 9) {
        setShow(show + 1);
        value.style.pointerEvents = "none";
      }
    });
  };

  /////////////////////////////////////////           tab screen last components       ////////////////////////////

  const handelclick3 = () => {
    add();
    setTimeout(() => {
      setNewstate(newstate + 1);
    }, 1000);
    handelchange();
  };

  const prevhandelclick3 = () => {
    add();
    setTimeout(() => {
      setNewstate(newstate - 1);
    }, 1000);
    handelchange();
  };

  const handelchange3 = (correct, id) => {
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
        if (newstate === 24) {
          setMshow(Mshow + 1);
        }
      }
    });
  };

  /////////////////////////////////////////           mobile screen       ////////////////////////////

  const Mhandelclick = () => {
    Madd();
    setTimeout(() => {
      setstate(state + 1);
    }, 1000);
    Mhandelchange();
  };

  const Mprevhandelclick = () => {
    Madd();
    setTimeout(() => {
      setstate(state - 1);
    }, 1000);
    Mhandelchange();
  };

  const Mhandelchange = (correct, id) => {
    setValue(correct);
    let inp = document.querySelectorAll(".input");
    let newinp = Array.from(inp);
    newinp.filter((value) => {
      if (value.id == id) {
        let a = document.getElementById(id);
        a.style.backgroundColor = "#125566";
        a.style.color = "white";
      } else {
        value.style.backgroundColor = "white";
        value.style.color = "black";
        if (state === 9) {
          setMshow(Mshow + 1);
          value.style.pointerEvents = "none";
        }
      }
    });
  };

  /////////////////////////////////////////           mobile screen last components       ////////////////////////////

  const Mhandelclick3 = () => {
    Madd();
    setTimeout(() => {
      setNewstate(newstate + 1);
    }, 1000);
    Mhandelchange();
  };

  const Mprevhandelclick3 = () => {
    Madd();
    setTimeout(() => {
      setNewstate(newstate - 1);
    }, 1000);
    Mhandelchange();
  };

  const Mhandelchange3 = (correct, id) => {
    setValue(correct);
    let inp = document.querySelectorAll(".input");
    let newinp = Array.from(inp);
    newinp.filter((value) => {
      if (value.id == id) {
        let a = document.getElementById(id);
        a.style.backgroundColor = "#125566";
        a.style.color = "white";
      } else {
        value.style.backgroundColor = "white";
        value.style.color = "black";

        if (newstate === 24) {
          setMshow(Mshow + 1);
          value.style.pointerEvents = "none";
        }
      }
    });
  };

  return (
    <Context.Provider
      value={{
        questions,
        handelclick,
        state,
        prevhandelclick,
        handelchange,
        Mhandelclick,
        Mprevhandelclick,
        Mhandelchange,
        value,
        show,
        Mshow,
        handelclick3,
        prevhandelclick3,
        handelchange3,
        Mhandelclick3,
        Mprevhandelclick3,
        Mhandelchange3,
        newstate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function Usethem() {
  return useContext(Context);
}
