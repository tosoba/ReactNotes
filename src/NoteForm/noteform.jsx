import React, { Component } from 'react';
import './noteform.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newNoteContent: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            newNoteContent: e.target.value
        });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            if (e.target.value === '') return;
            this.props.addNote(this.state.newNoteContent);
            this.setState({
                newNoteContent: ''
            });
        }
    }

    render() {
        return (
            <div className="formWrapper">
                <input className="noteInput" 
                    placeholder="New note..."
                    value={this.state.newNoteContent}
                    onChange={this.handleUserInput}
                    onKeyPress={this.handleKeyPress}/>
            </div>
        )
    }
}

export default NoteForm;