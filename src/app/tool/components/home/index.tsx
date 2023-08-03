"use client"
import Classes from "./home.module.scss"
import ReactJSQ from "../../common/data/reactjs_questions.json"
import TypeScriptQ from "../../common/data/typescript_questions.json"
import NextJSQ from "../../common/data/nextjs_questions.json"
import PWAQ from "../../common/data/pwa_questions.json"
import UnitTestQ from "../../common/data/unit_test_questions.json"
import { useState } from "react"
import { getUniqueNumArray } from "../../common/utils"

export default function InterviewToolHome() {

  const [questionSetArray, setQuestionSetArray] = useState<any[]>([])
  const [questionStr, setQuestionStr] = useState("")
  const [questionLimitArray] = useState(Array.from(Array(10).keys()))
  const [qLimit, setQLimit] = useState(5)
  const [answer, setAnswer] = useState("")

  const handleLimitSelect = (limitValue: number) => {
    setQLimit(+limitValue)
  }

  const handleCheckBoxEvent = (e: any) => {
    if (e.target.checked) {
      questionSetArray.push(e.target.value)
    } else {
      let tmp = questionSetArray.filter((item: any) => item !== e.target.value)
      setQuestionSetArray(tmp)
    }
  }

  const getQuestionSetObject = (name: string) => {
    switch (name) {
      case "ReactJSQ":
        return ReactJSQ;
      case "TypeScriptQ":
        return TypeScriptQ;
      case "NextJSQ":
        return NextJSQ;
      case "PWAQ":
        return PWAQ;
      case "UnitTestQ":
        return UnitTestQ;
    }
  }

  const handleGenerateQuestion = () => {
    console.log(questionSetArray)
    let questionsArray: any = []
    questionSetArray.forEach((qSet: any) => {
      let questionObj: any = getQuestionSetObject(qSet)
      questionsArray = questionsArray.concat(questionObj.questions)
    })
    console.log("questionsArray", questionsArray)
    const noOfQuestion = questionsArray?.length;
    console.log("noOfQuestion", noOfQuestion)

    let uniqueNumArray: number[] = getUniqueNumArray(1, noOfQuestion, qLimit)
    console.log("uniqueNumArray", uniqueNumArray)

    let qtnStr = "";
    uniqueNumArray.map((item: number, index) => {
      qtnStr = qtnStr + "\n" + `${index + 1}: ${questionsArray[item - 1]}`
    })
    console.log(qtnStr)
    setQuestionStr(qtnStr.trim())
  }

  return (
    <>
      <div className={`${Classes.interview_home_wrapper}`}>
        <h1 className={`text-center`}>Generate Interview Questions</h1>
        <div className={`${Classes.checkbox_wrapper}`}>
          <div>
            <input type="checkbox" onChange={handleCheckBoxEvent} value="ReactJSQ" />
            <label>ReactJS</label>
          </div>
          <div>
            <input type="checkbox" onChange={handleCheckBoxEvent} value="TypeScriptQ" />
            <label>TypeScript</label>
          </div>
          <div>
            <input type="checkbox" onChange={handleCheckBoxEvent} value="NextJSQ" />
            <label>NextJS</label>
          </div>
          <div>
            <input type="checkbox" onChange={handleCheckBoxEvent} value="PWAQ" />
            <label>PWA</label>
          </div>
          <div>
            <input type="checkbox" onChange={handleCheckBoxEvent} value="UnitTestQ" />
            <label>UnitTest</label>
          </div>
        </div>


        <div className={`${Classes.question_wrapper}`}>
          <textarea placeholder="Your question will appear here." defaultValue={questionStr} />
        </div>
        <div className={`${Classes.button_wrapper} text-center`}>
          <select className={`btn btn-light`} onChange={(e: any) => {
            handleLimitSelect(e.target.value)

          }} value={5}>
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
