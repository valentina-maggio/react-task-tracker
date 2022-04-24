import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        {task.text} 
        <FontAwesomeIcon 
        icon={faTimes} 
        style={{color: 'red', cursor: 'pointer'}} 
        onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
