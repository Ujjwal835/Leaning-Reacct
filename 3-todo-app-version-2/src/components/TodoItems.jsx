import TodoItem from "./TodoItem"
import styles from './TodoItems.module.css'
export default function TodoItems({ todoItems }) {
    return (

        <div className={styles.itemsContainer}>

            {/* since we are getting an array todoitems therfoore use map method and use curly braces because its javascript */}

            {todoItems.map(item => (< TodoItem todoDate={item.dueDate} todoName={item.name} />))}

        </div>
    )
}
