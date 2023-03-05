import axios from "axios";
import React, { useEffect, useRef } from "react";
import { MathJax } from "better-react-mathjax";

const QuestionID = ({setLoading,setData,count,loading,data, val}) => {
  const  ulRef = useRef();
   const fetchApiData =  () => {
    setLoading(true);
    try {
     axios
      .get(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${val[count]}`
      ).then((res)=>{
        setData(res.data);
      })
        
        setLoading(false);
    } catch (error) {
        console.log(error.name);
    }
   
  };
  useEffect(() => {
    fetchApiData();
  }, [count]);

const showAnswer = ()=>{
  
  ulRef.current.classList.toggle("open-ans");
}

 
  if (loading && MathJax) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="m-container">
    <div onClick={showAnswer} className="question-container">      
      {data.map(({ Question }) => {
        return <MathJax className="question" key={Question}>{Question}</MathJax>;
      })}
      
    </div>
    <div ref={ulRef} className="answer-sec">Answer will show here</div>
    </div>
    
  );
};

export default QuestionID;
