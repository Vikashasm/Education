import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const questions = [
  {
    questionstext: " what is the capital of france ?",
    answeroption: [
      { optionNo: "A:", answertext: " new york", iscorrect: false },
      { optionNo: "B:", answertext: " London", iscorrect: false },
      { optionNo: "C:", answertext: " Paris", iscorrect: true },
      { optionNo: "D:", answertext: " Dublin", iscorrect: false },
    ],
  },
  {
    questionstext: "what is the CEO of Tesla ?",
    answeroption: [
      { optionNo: "A:", answertext: " Jeff Bezos", iscorrect: false },
      { optionNo: "B:", answertext: " Elon Musk", iscorrect: true },
      { optionNo: "C:", answertext: " Bill Gates", iscorrect: false },
      { optionNo: "D:", answertext: " Tony Stark", iscorrect: false },
    ],
  },
  {
    questionstext: "The Iphone was created by which company ?",
    answeroption: [
      { optionNo: "A:", answertext: " Apple", iscorrect: true },
      { optionNo: "B:", answertext: " Microsoft", iscorrect: false },
      { optionNo: "C:", answertext: " Intel", iscorrect: false },
      { optionNo: "D:", answertext: " Amozon", iscorrect: false },
    ],
  },
  {
    questionstext: "What was JavaScript called some time ago?",
    answeroption: [
      { optionNo: "A:", answertext: " java", iscorrect: false },
      { optionNo: "B:", answertext: " EcmaScript", iscorrect: false },
      { optionNo: "C:", answertext: " Oak", iscorrect: false },
      { optionNo: "D:", answertext: " Mocha", iscorrect: true },
    ],
  },
  {
    questionstext: "What is full form of Css?",
    answeroption: [
      { optionNo: "A:", answertext: " Console style sheet", iscorrect: false },
      { optionNo: "B:", answertext: " Cascading style sheet", iscorrect: true },
      { optionNo: "C:", answertext: " Create style sheet", iscorrect: false },
      {
        optionNo: "D:",
        answertext: " Cascading sheet style",
        iscorrect: false,
      },
    ],
  },
  {
    questionstext: "What is full form of Css?",
    answeroption: [
      { optionNo: "A:", answertext: " Console style sheet", iscorrect: false },
      { optionNo: "B:", answertext: " Cascading style sheet", iscorrect: true },
      { optionNo: "C:", answertext: " Create style sheet", iscorrect: false },
      {
        optionNo: "D:",
        answertext: " Cascading sheet style",
        iscorrect: false,
      },
    ],
  },
  {
    questionstext: "What is full form of Css?",
    answeroption: [
      { optionNo: "A:", answertext: " Console style sheet", iscorrect: false },
      { optionNo: "B:", answertext: " Cascading style sheet", iscorrect: true },
      { optionNo: "C:", answertext: " Create style sheet", iscorrect: false },
      {
        optionNo: "D:",
        answertext: " Cascading sheet style",
        iscorrect: false,
      },
    ],
  },
  {
    questionstext: "What is full form of Css?",
    answeroption: [
      { optionNo: "A:", answertext: " Console style sheet", iscorrect: false },
      { optionNo: "B:", answertext: " Cascading style sheet", iscorrect: true },
      { optionNo: "C:", answertext: " Create style sheet", iscorrect: false },
      {
        optionNo: "D:",
        answertext: " Cascading sheet style",
        iscorrect: false,
      },
    ],
  },
  {
    questionstext: "What is full form of Css?",
    answeroption: [
      { optionNo: "A:", answertext: " Console style sheet", iscorrect: false },
      { optionNo: "B:", answertext: " Cascading style sheet", iscorrect: true },
      { optionNo: "C:", answertext: " Create style sheet", iscorrect: false },
      {
        optionNo: "D:",
        answertext: " Cascading sheet style",
        iscorrect: false,
      },
    ],
  },
  {
    questionstext: "What is full form of Css 10 ?",
    answeroption: [
      { optionNo: "A:", answertext: " Console style sheet", iscorrect: false },
      { optionNo: "B:", answertext: " Cascading style sheet", iscorrect: true },
      { optionNo: "C:", answertext: " Create style sheet", iscorrect: false },
      {
        optionNo: "D:",
        answertext: " Cascading sheet style",
        iscorrect: false,
      },
    ],
  },
];

const Context = createContext(questions);

export const ContextProvider = function ({ children }) {
  const [state, setstate] = useState(0);

  const [value, setValue] = useState(undefined);

  const [show, setShow] = useState(0);

  const path = useLocation();
  useEffect(() => {
    setstate(0);
  }, [path.pathname]);

  const handelclick = () => {
    setstate(state + 1);
    let btn = document.getElementById("buton");
    let prevbtn = document.getElementById("prevbuton");
    btn.style.backgroundColor = "#FFCE32";
    prevbtn.style.backgroundColor = "white";
    handelchange();
    if (state === 8) {
      setShow(show + 1);
    }
  };

  const prevhandelclick = () => {
    setstate(state - 1);
    let prevbtn = document.getElementById("prevbuton");
    // console.log(prevbtn);
    let btn = document.getElementById("buton");
    btn.style.backgroundColor = "white";
    prevbtn.style.backgroundColor = "#FFCE32";
    handelchange();
  };

  const handelchange = (correct, id) => {
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
  };

  const Mhandelclick = () => {
    setstate(state + 1);
    let Mbtn = document.getElementById("buton1");
    let Mprevbtn = document.getElementById("prevbuton2");
    Mbtn.style.backgroundColor = "#FFCE32";
    Mprevbtn.style.backgroundColor = "white";
    Mhandelchange();
  };

  const Mprevhandelclick = () => {
    setstate(state - 1);
    let Mprevbtn = document.getElementById("prevbuton2");
    let Mbtn = document.getElementById("buton1");
    Mbtn.style.backgroundColor = "white";
    Mprevbtn.style.backgroundColor = "#FFCE32";
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function Usethem() {
  return useContext(Context);
}
