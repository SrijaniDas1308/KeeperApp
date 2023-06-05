import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const[isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded===true &&
                <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
            />}
                
                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded===true ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
