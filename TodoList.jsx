import List from '@mui/material/List';
import {useState, useEffect} from "react"
import TodoItem from './TodoItem';
import TodoForm from "./TodoForm"
import {Box} from "@mui/material"
const getInitialTodo = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if(!data){
        return []
    }
    else
    return data;
}

export default function TodoList(){
    const [todos, setTodos] = useState(getInitialTodo)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    const removeTodo = (id) => {
        setTodos((todos) => {
          return todos.filter((t) => t.id !== id);
        });
      };
      
      const toggleTodo = (id) => {
        setTodos((todos) => {
            return todos.map((t) =>{
                if (t.id === id)
                {
                    return {...t, completed : !t.completed}
                }
                else{
                    return t
                }
            })
        })
      }

      const addTodo = (text) => {
        setTodos((todos) => {
           return  [...todos, {text : text, id: crypto.randomUUID(), completed : false}]
        })
      }

    return (
        <div>
          <Box sx = {{
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            m: 4
          }}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => {
                 return <TodoItem todo = {todo} 
                 key = {todo.id} 
                 removeTodo = {() => removeTodo(todo.id)}
                 toggleTodo = {() => toggleTodo(todo.id)}></TodoItem>   
                })
                }
                <TodoForm addTodo = {addTodo}></TodoForm>
            </List>
          </Box>
            
        </div>
    )
}



