import { useState } from 'react';
import './ExerciseComponent.css';
import ExerciseDate from './ExerciseDate';

function ExerciseComponent(props) {
    //let title = props.title;
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated');
        console.log("Updated.")
    }
    return (
      <div className="expense-item">
        <ExerciseDate date={props.date}></ExerciseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          
        </div>
      </div>
    );
}

export default ExerciseComponent;