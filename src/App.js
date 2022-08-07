import React from "react"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  //console.log(part1.name)
  //console.log(part1.exercises)

  const Header = (props) => {
    //console.log(props.course)
    return (
        <h1>
          {props.course}
        </h1>
    )
  }

  const Part = (props) => {
    console.log(props.part1)
    return (
      <div>
        <p>
          {props.name} {props.exercises}
        </p>
      </div>
    )
  }

  const Content = (props) => {
    console.log(props);
    return (
      <div>
        <Part name={props.part1.name} exercises={props.part1.exercises} />
        <Part name={props.part2.name} exercises={props.part2.exercises} />
        <Part name={props.part3.name} exercises={props.part3.exercises} />
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>
          Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={part1} exercises2={part2} exercises3={part3}/>
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App