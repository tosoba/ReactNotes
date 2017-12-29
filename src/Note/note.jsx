import React, { Component } from 'react';
import './note.css';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteId: this.props.noteId,
            noteContent: this.props.noteContent
        };

        this.removeNote = this.removeNote.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleKeyPress(e) {
        if (e.keyCode === 9) {
            e.preventDefault();
        }
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.blur();
        }
    }

    handleBlur(e) {
        if (e.target.textContent.trim() === '') {
            this.removeNote();
            return;
        }
        
        this.setState({
            noteId: this.state.noteId,
            noteContent: e.target.textContent
        });
    }

    removeNote() {
        this.props.removeNote(this.state.noteId);
    }

    render(props) {
        return (
            <div className="noteWrapper">
                <div className="note fade-in">
                    <div className="noteContent" 
                        contentEditable="true" 
                        onKeyPress={this.handleKeyPress} 
                        tabindex="-1" 
                        spellCheck="false"
                        onBlur={this.handleBlur}>
                    {this.state.noteContent}
                    </div>
                    <input className="removeNote" type="button" value="✖" onClick={this.removeNote} />
                </div>
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;