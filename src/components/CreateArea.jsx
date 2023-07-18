import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { Fab } from "@mui/material";
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';

const initialState = {
  title: "",
  content: "",
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

function CreateArea({ onAdd }) {
  const [note, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) =>
    dispatch({ field: e.target.name, value: e.target.value });

  const submitNote = (e) => {
    e.preventDefault();
    onAdd(note);
    dispatch({ field: "title", value: "" });
    dispatch({ field: "content", value: "" });
  };

  return (
    <div className="print-area">
      <form className="create-note" onSubmit={submitNote}>
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
        <Fab type="submit">
          <PlaylistAddCircleIcon />
        </Fab>
      </form>
    </div>
  );
}

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateArea;
