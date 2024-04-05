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

  useEffect(() => {
    setstate(0);
    setValue(undefined);
  }, [path.pathname]);

  const handelclick = () => {
    setstate(state + 1);
    handelchange();
  };

  const prevhandelclick = () => {
    setstate(state - 1);
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
    });
    if (state === 9) {
      setShow(show + 1);
    }
  };

  const Mhandelclick = () => {
    setstate(state + 1);
    Mhandelchange();
  };

  const Mprevhandelclick = () => {
    setstate(state - 1);
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
      }
    });

    if (state === 9) {
      setMshow(Mshow + 1);
    }
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function Usethem() {
  return useContext(Context);
}
