// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import "./StudentMainView.css";
// import Sidebar from "../Sidebar/Sidebar";

// function StudentDisplay() {
//   const navigate = useNavigate();
//   const [correctCount, setCorrectCount] = useState(0);
//   const [allQuestionOfQuiz, setAllQuestionsOfQuiz] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState({});
//   const [questionCounter, setQuestionCounter] = useState(0);
//   const [totalNoOfQuestions, setTotalNoOfQuestions] = useState(0);
//   const [currSelectedOption, setCurrSelectedOption] = useState("");
//   const [answerSheet, setAnswerSheet] = useState([]);
//   const { quiz_id } = useParams();
//   const { state } = useLocation();

//   console.log(state);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/questions/quizId/" + quiz_id)
//       .then((res) => {
//         console.log("Res", res.data);
//         setAllQuestionsOfQuiz(res.data);
//         setTotalNoOfQuestions(res.data.length);
//         if (res.data.length > 0) setCurrentQuestion(res.data[questionCounter]);
//       })
//       .catch((err) => {
//         console.log("Err", err);
//       });
//   }, []);

//   return (
//     <>
//       {" "}
//       <Sidebar />
//       <div className="mainContainer" style={{ backgroundColor: "black", color:"white", fontSize:"20px" }}>
//         <button
//           style={{ marginLeft: "75%" }}
//           onClick={() =>
//             navigate("/Scorecard", {
//               state: {
//                 answerSheet: answerSheet,
//                 user_id: state.user_id,
//               },
//             })
//           }
//         >
//           End Test
//         </button>
//         <br />
//         <br />
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             // let selectAns = event.target.options.value;
//             // console.log(event.target.options.value, currentQuestion.answer);
//             // if (selectAns === currentQuestion.answer) {
//             //   setCorrectCount(correctCount + 1);
//             // }
//           }}
//         >
//           <label>Question No : </label>
//           <input
//             type="text"
//             disabled={true}
//             value={questionCounter + 1}
//           ></input>
//           <br />
//           <br />
//           <label>Question : </label>
//           <input
//             type="text"
//             disabled={true}
//             value={currentQuestion.description}
//             style={{ width: "900px", wordWrap: "break-word", color:"black" }}
//           ></input>
//           <br />
//           <br />
//           <input
//             type="radio"
//             name="options"
//             value="1"
//             onChange={() => setCurrSelectedOption("1")}
//           ></input>
//           <label> 1) </label>
//           <input
//             type="text"
//             disabled={true}
//             value={currentQuestion.option1}
//           ></input>
//           <br />
//           <br />
//           <input
//             type="radio"
//             name="options"
//             value="2"
//             onChange={() => setCurrSelectedOption("2")}
//           ></input>
//           <label> 2) </label>
//           <input
//             type="text"
//             disabled={true}
//             value={currentQuestion.option2}
//           ></input>
//           <br />
//           <br />
//           <input
//             type="radio"
//             name="options"
//             value="3"
//             onChange={() => setCurrSelectedOption("3")}
//           ></input>
//           <label> 3) </label>
//           <input
//             type="text"
//             disabled={true}
//             value={currentQuestion.option3}
//           ></input>
//           <br />
//           <br />
//           <input
//             type="radio"
//             name="options"
//             value="4"
//             onChange={() => setCurrSelectedOption("4")}
//           ></input>
//           <label> 4) </label>
//           <input
//             type="text"
//             disabled={true}
//             value={currentQuestion.option4}
//           ></input>
//           <br />
//           <br />

//           <button
//             style={{ marginRight: "20px" }}
//             onClick={() => {
//               console.log("Pressed prev button");
//               if (questionCounter - 1 >= 0) {
//                 console.log("In if");
//                 let no = questionCounter - 1;
//                 setQuestionCounter(no);
//                 console.log("This", allQuestionOfQuiz[no]);
//                 setCurrentQuestion(allQuestionOfQuiz[no]);
//               }
//             }}
//           >
//             Prev
//           </button>
//           <button
//             style={{ marginRight: "20px" }}
//             // type="submit"
//             onClick={(event) => {
//               event.preventDefault();
//               // let selectAns = event.target.options.value;
//               console.log(currSelectedOption, currentQuestion.answer);
//               let i = 0;
//               const newAnswerSheet = [...answerSheet];

//               for (i = 0; i < newAnswerSheet.length; i++) {
//                 if (newAnswerSheet[i].q_id === currentQuestion.q_id) {
//                   newAnswerSheet[i].answer = currSelectedOption;
//                   break;
//                 }
//               }
//               if (i === newAnswerSheet.length)
//                 setAnswerSheet(
//                   answerSheet.concat({
//                     q_id: currentQuestion.q_id,
//                     answer: currSelectedOption,
//                   })
//                 );
//               else {
//                 setAnswerSheet(newAnswerSheet);
//               }
//               // setCorrectCount(correctCount + 1);
//             }}
//           >
//             Submit
//           </button>
//           <button
//             onClick={() => {
//               console.log("Pressed next button");
//               if (questionCounter + 1 < totalNoOfQuestions) {
//                 console.log("In if");
//                 let no = questionCounter + 1;
//                 setQuestionCounter(no);
//                 console.log("This", allQuestionOfQuiz[no]);
//                 setCurrentQuestion(allQuestionOfQuiz[no]);
//               }
//             }}
//           >
//             Next
//           </button>
//         </form>
//         {/* <h1>{correctCount}</h1> */}
//         {/* {answerSheet.map((e) => {
//         return (
//           <>
//             <h1>
//               {e.q_id} "-" {e.answer}
//             </h1>
//           </>
//         );
//       })} */}
//       </div>
//     </>
//   );
// }

// export default StudentDisplay;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function StudentDisplay() {
  const navigate = useNavigate();
  const [allQuestionOfQuiz, setAllQuestionsOfQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questionCounter, setQuestionCounter] = useState(0);
  const [totalNoOfQuestions, setTotalNoOfQuestions] = useState(0);
  const [currSelectedOption, setCurrSelectedOption] = useState("");
  const [answerSheet, setAnswerSheet] = useState([]);
  const { quiz_id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:5000/questions/quizId/" + quiz_id)
      .then((res) => {
        setAllQuestionsOfQuiz(res.data);
        setTotalNoOfQuestions(res.data.length);
        if (res.data.length > 0) setCurrentQuestion(res.data[questionCounter]);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="h-[90vh] w-full flex justify-center item-center ">
        <div className="mainContainer w-4/6 m-auto h- bg-slate-500 flex flex-col justify-between  text-white p-8">
          <button
            className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              navigate("/Scorecard", {
                state: {
                  answerSheet: answerSheet,
                  user_id: state.user_id,
                },
              })
            }
          >
            End Test
          </button>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="text-left"
          >
            <div className="mb-4">
              <label className="font-bold">Question No :</label>
              <input
                type="text"
                disabled={true}
                value={questionCounter + 1}
                className="ml-2 bg-gray-200 p-2 rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold">Question :</label>
              <input
                type="text"
                disabled={true}
                value={currentQuestion.description}
                className="ml-2 text-black bg-gray-200 p-2 rounded w-full"
              />
            </div>
            {[1, 2, 3, 4].map((option) => (
              <div key={option} className="mb-4">
                <input
                  type="radio"
                  name="options"
                  value={option}
                  onChange={() => setCurrSelectedOption(option.toString())}
                  id={`option-${option}`}
                  className="mr-2 text-black"
                />
                <label
                  htmlFor={`option-${option}`}
                  className="mr-2"
                >{`${option})`}</label>
                <input
                  type="text"
                  disabled={true}
                  value={currentQuestion[`option${option}`]}
                  className="bg-gray-200 p-2 rounded text-black"
                />
              </div>
            ))}
            <div className="flex justify-between">
              <button
                onClick={() => {
                  if (questionCounter - 1 >= 0) {
                    setQuestionCounter(questionCounter - 1);
                    setCurrentQuestion(allQuestionOfQuiz[questionCounter - 1]);
                  }
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Prev
              </button>
              <button
                onClick={() => {
                  let i = 0;
                  const newAnswerSheet = [...answerSheet];
                  for (i = 0; i < newAnswerSheet.length; i++) {
                    if (newAnswerSheet[i].q_id === currentQuestion.q_id) {
                      newAnswerSheet[i].answer = currSelectedOption;
                      break;
                    }
                  }
                  if (i === newAnswerSheet.length) {
                    setAnswerSheet(
                      answerSheet.concat({
                        q_id: currentQuestion.q_id,
                        answer: currSelectedOption,
                      })
                    );
                    alert("answer saved");
                  } else {
                    setAnswerSheet(newAnswerSheet);
                  }
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Submit
              </button>
              <button
                onClick={() => {
                  if (questionCounter + 1 < totalNoOfQuestions) {
                    setQuestionCounter(questionCounter + 1);
                    setCurrentQuestion(allQuestionOfQuiz[questionCounter + 1]);
                  }
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentDisplay;
