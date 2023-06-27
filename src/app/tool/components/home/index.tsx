"use client"
import Classes from "./home.module.scss"
import Data from "./data.json"
import { useState } from "react"
import { getRandomNumber, getUniqueNumArray } from "../../common/utils"

export default function InterviewToolHome() {

  const [questionStr, setQuestionStr] = useState("")
  const [answer, setAnswer] = useState("")

  const handleGenerateQuestion = () => {
    let uniqueNumArray: number[] = getUniqueNumArray(1, 50, 5)
    let qtnStr = "";
    uniqueNumArray.map((item: number) => {
      qtnStr = qtnStr + "\n" + `${item}: ${Data.questions[item - 1]}`
    })
    setQuestionStr(qtnStr.trim())
  }
  return (
    <>
      <div className={`${Classes.interview_home_wrapper}`}>
        <h1 className={`text-center`}>Generate Interview Questions</h1>
        <div className={`${Classes.question_wrapper}`}>
          <textarea placeholder="Your question will appear here." defaultValue={questionStr} />
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
