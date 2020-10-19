import React from 'react';
import classes from '../Profile.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({status : this.props.status});
        }
    }
    onEditMode () {
        this.setState({
            editMode: true
        })
    }
    offEditMode () {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    changeStatus (e) {
        this.setState({status: e.currentTarget.value})
    }
    render () {
        return (
            <div className={classes.status}>
                <p>Status: {this.state.editMode &&
                    <input autoFocus="true" type="text" value={this.state.status} 
                    onBlur={() => {this.offEditMode()}} onChange={(e)=>{this.changeStatus(e)}}/>}
                    {!this.state.editMode &&
                    <span onDoubleClick={() => {this.onEditMode()}}>{this.props.status || 'No status yet'}</span>}  
                </p>
            </div>
        )
    }
}

export default ProfileStatus;