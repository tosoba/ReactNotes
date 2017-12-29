import React, { Component } from 'react';
import './groupform.css';

class GroupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newGroupName: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            newGroupName: e.target.value
        });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            if (e.target.value === '') return;
            this.props.addGroup(this.state.newGroupName);
            this.setState({
                newGroupName: ''
            });
        }
    }

    render() {
        return (
            <div style={{display: 'inline-block', marginTop: '20px', height: 'auto', textAlign: 'center'}}>
                <input className="groupInput" 
                    placeholder="New group..."
                    value={this.state.newGroupName}
                    onChange={this.handleUserInput}
                    onKeyPress={this.handleKeyPress}/>
            </div>
        )
    }
}

export default GroupForm;