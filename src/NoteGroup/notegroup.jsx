import React, { Component } from 'react';
import './notegroup.css';
import PropTypes from 'prop-types';
import Note from '../Note/note';
import NoteForm from '../NoteForm/noteform';

class NoteGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                { id: 1, noteContent: "note 1" },
                { id: 2, noteContent: "note 2" },
                { id: 3, noteContent: "note 3" },
                { id: 4, noteContent: "note 4" },
                { id: 5, noteContent: "note 5" }
            ]
        };

        this.id = props.id;
        this.name = props.name;

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.removeGroup = this.removeGroup.bind(this);
    }

    addNote(note) {
        const previousNotes = this.state.notes;
        let maxId = Math.max(previousNotes.map((note) => note.id));
        previousNotes.push({ id: maxId, noteContent: note });
        this.setState({
            notes: previousNotes
        });
    }

    removeNote(id) {
        const previousNotes = this.state.notes;
        let indexToRemove = previousNotes.findIndex((note) => note.id === id);
        previousNotes.splice(indexToRemove, 1);
        this.setState({
            notes: previousNotes
        });
    }

    removeGroup() {
        this.props.removeGroup(this.id);
    }

    render(props) {
        return (
            <div className="groupBody">
                <div className="groupTitle">
                    <div className="groupText" style={{display: 'flex'}}>{this.name}</div>
                    <input className="removeGroup" type="button" value="✖" onClick={this.removeGroup} />
                </div>
                {
                    this.state.notes.map((note) => {
                        return (
                            <Note noteContent={note.noteContent} 
                                noteId={note.id} 
                                key={note.id} 
                                removeNote={this.removeNote}/>
                        );
                    })
                }
                <NoteForm addNote={this.addNote} />
            </div>
        );
    }
}

export default NoteGroup;