import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
        const { name, value } = e.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(e) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }

    return(
        <div className="print-area">
            <form className="create-note">
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />

                <textarea
                    name="content"
                    rows="3"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                />
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    )
}

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateArea;
