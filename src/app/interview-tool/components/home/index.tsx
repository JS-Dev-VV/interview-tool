"use client"
import Classes from "./home.module.scss"
import Data from "./data.json"
import { useState } from "react"
import { getRandomNumber } from "../../common/utils"

export default function InterviewToolHome() {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleGenerateQuestion = () => {
    let qNum = getRandomNumber(1, 50)
    let question = `${qNum}: ${Data?.questions[qNum - 1]}`
    setQuestion(question)
    // setAnswer(Data?.answers[qNum - 1])
  }
  return (
    <>
      <div className={`${Classes.interview_home_wrapper}`}>
        <h1 className={`text-center`}>Generate Interview Questions</h1>
        <div className={`${Classes.question_wrapper}`}>
          <textarea placeholder="Your question will appear here." defaultValue={question} />
        </div>
        <div className={`${Classes.button_wrapper} text-center`}>
          <button className={`btn btn-light`} onClick={() => { handleGenerateQuestion() }}>Generate Question</button>
          <button className={`btn btn-light`}>See Answer</button>
        </div>
        <div className={`${Classes.answer_wrapper}`}>
          <textarea placeholder="Your answer will appear here." />
        </div>
      </div >
    </>
  )
}
