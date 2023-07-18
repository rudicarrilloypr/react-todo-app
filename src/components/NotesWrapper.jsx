import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({onDelete, id, title, content}) => {
    return(
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}>
                <DeleteIcon />
            </button>
        </div>
    )
}

Note.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
