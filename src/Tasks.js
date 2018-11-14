import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

export default class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            tasks: [],
            error: false,
            textFilter: ''
        };
        this.ClearText = this.ClearText.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addBlock = () =>{
        let text = this.state.text;
        let arr = this.state.tasks;
        if (text !== '') {
            arr.push(text);
            this.setState({error: false});
            this.setState({tasks: arr});
        } else {
            this.setState({error: true});
        }
        this.setState({text:""});
    };

    deleteBlock = (i) =>{
        let arr = this.state.tasks;
        arr.splice(i, 1);
        this.setState({tasks: arr});
    };
    updateText = (text, i) =>{
        let arr = this.state.tasks;
        arr[i]=text;
        this.setState({tasks:arr});
    };

    eachTask = (item,i) =>{
        return (
            <Note key={i} index={i} update={this.updateText} delete={this.deleteBlock}>
                {item}
            </Note>
        );
    };


    ClearText = () => {
        this.setState({text:""})
    };
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };
    filterItems = () => {
        let arr = this.state.tasks;
        let textFilter = this.state.textFilter;
        console.log(this.state.textFilter);
        console.log(this.state.tasks);
        this.setState( {tasks: arr.filter(o=>o.toLowerCase().indexOf(
                textFilter) !== -1)})
    };
    render(){
        return(
            <div className='task-list'>
                <div className="navigation btn-group">
                    <Button variant="contained" color="primary" className="Home"><Link to="/">Home</Link></Button>
                    <Input id="new-todo" onChange={this.handleChange('text')} className={this.state.error ? "Error": null} value={this.state.text}/>
                    <Button variant="contained" color="primary" onClick={this.addBlock}>New Task</Button>
                    <Button variant="contained" color="secondary" onClick={this.ClearText}>Clear</Button>
                    <Input onChange={this.handleChange("textFilter")} value={this.state.textFilter}/>
                    <IconButton onClick={this.filterItems}><Search/></IconButton>
                </div>
                <div className='box-container'>{this.state.tasks.map (this.eachTask)}</div>
            </div>
        )
    }

}

