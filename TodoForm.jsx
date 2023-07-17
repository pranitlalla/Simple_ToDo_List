import { TextField } from "@mui/material";
import {useState} from "react"
import ListItem from '@mui/material/ListItem';
import Create from "@mui/icons-material/Create"
import {InputAdornment} from "@mui/material"
import {IconButton} from "@mui/material"
export default function TodoForm({addTodo}){
    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText("")
    }

    return(
        <div>
            <ListItem>
            <form onSubmit = {handleSubmit}>
            <TextField id="outlined-basic" 
                label="Add a task" 
                variant="outlined" 
                onChange = {handleChange}
                value = {text}
                InputProps={{
                    endAdornment:  <InputAdornment position="end">
                        <IconButton
                        aria-label="create todo item"
                        edge="end"
                        type = "submit">
                        <Create/>
                        </IconButton>
                    </InputAdornment>
                    }
                }
                
                />
            </form>
            </ListItem>
        </div>
    )
}
