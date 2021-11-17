import style from "./Toggle.module.css";
const TodoList = ({id,status,title,handleDelete,handleToggle})=>{
    if(status==="true")
    {
        var Style = {
            background: "blue"
        }
    }

    return <div className={style.list}>
        <span className={style.id}>{id}.</span>
        <span className={style.title}>{title}</span>
        <button onClick={()=>handleToggle(id)} style={Style} className={style.status}>{status}</button>
        <button onClick={()=>handleDelete(id)} className={style.delete}>-</button>
    </div>
 }
 
 export default TodoList