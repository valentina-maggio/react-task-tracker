import { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: '5 May at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: '6 May at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: '5 May at 2:30pm',
      reminder: false,
    }
  ])

  return (
    <>
      {tasks.map((task) => (
      <h3 key={task.id}>{task.text}</h3>)
      )}
    </>
  )
}

export default Tasks
