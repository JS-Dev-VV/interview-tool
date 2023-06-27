import Classes from "./home.module.scss"

export default function InterviewToolHome() {
  return (
    <>
      <div className={`${Classes.interview_home_wrapper}`}>
        <div className={`${Classes.question_wrapper}`}>
          <textarea placeholder="Your question will display here." />
        </div>
        <div className={`${Classes.button_wrapper} text-center`}>
          <button className={`btn btn-light`}>Generate Question</button>
          <button className={`btn btn-light`}>See Answer</button>
        </div>
        <div className={`${Classes.answer_wrapper}`}>
          <textarea placeholder="Your answer will display here." />
        </div>
      </div>
    </>
  )
}
