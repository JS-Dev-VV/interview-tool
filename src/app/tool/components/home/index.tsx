"use client"
import Classes from "./home.module.scss"
import Data from "./data.json"
import { useState } from "react"
import { getUniqueNumArray } from "../../common/utils"

export default function InterviewToolHome() {

  const noOfQuestion = 50
  const [questionStr, setQuestionStr] = useState("")
  const [questionLimitArray] = useState(Array.from(Array(noOfQuestion).keys()))
  const [qLimit, setQLimit] = useState(1)
  const [answer, setAnswer] = useState("")

  const handleLimitSelect = (limitValue: number) => {
    setQLimit(+limitValue)
  }

  const handleGenerateQuestion = () => {
    let uniqueNumArray: number[] = getUniqueNumArray(1, 50, qLimit)
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
          <select className={`btn btn-light`} onChange={(e: any) => {
            handleLimitSelect(e.target.value)
          }}>
            {questionLimitArray.map((item) => {
              return (
                <>
                  <option key={item} value={item + 1}>{item + 1}</option>
                </>
              )
            })}
          </select>
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
