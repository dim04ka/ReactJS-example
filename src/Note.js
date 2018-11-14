import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';
import Edit from '@material-ui/icons/Edit';
import Done from '@material-ui/icons/Done';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {edit: false};

    };
    edit = () =>{
        this.setState({edit:true});
    };
    remove = () =>{
        this.props.delete(this.props.index);
    };
    save = () =>{
        this.props.update(this.refs.newText.value, this.props.index);
        this.setState({edit:false});
    };
    rendStand = () =>{
        console.log(this.props.createdDate);
        return(
            <div className="box">
                <div onClick={this.edit} className="text">{this.props.children}</div>
                <div className='navs'>
                    <IconButton onClick={this.remove}><Clear color='secondary'/></IconButton>
                    <br/>
                    <IconButton onClick={this.edit}><Edit/></IconButton>
                </div>
            </div>
        )
    };
    rendEdit = () =>{
        return(
            <div className="box">
                <textarea ref="newText" defaultValue={this.props.children}/>
                {/*<button onClick={this.save} className="btn btn-success">Save</button>*/}
                <IconButton onClick={this.save}><Done /></IconButton>
            </div>
        )
    };
    render() {
        if (this.state.edit){
            return this.rendEdit();
        }else{
            return this.rendStand();
        }
    }

}