import React, {Component} from 'react';
import FirstChild from './firstChild';
import SecondChild from './secondChild';
import { Link } from 'react-router-dom';

export default class ShowHide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstchildVisible: false,
            secondChildVisible: false
        };
        this.ShowFirstText = this.ShowFirstText.bind(this);
        this.ShowSecondText = this.ShowSecondText.bind(this);
    }

    ShowFirstText = () => {
        this.setState({
            firstchildVisible: !this.state.firstchildVisible,
            secondChildVisible: false
        });
    };
    ShowSecondText = () => {
        this.setState({
            secondChildVisible: !this.state.secondChildVisible,
            firstchildVisible: false
        });
    };


    render() {
        return (
            <div>
                <ul className='list-group'>
                    <Link to='/news' className='btn list-group-item list-group-item-action'>NEWS</Link>
                    <Link to='/input' className='btn list-group-item list-group-item-action'>INPUT</Link>
                    <Link to='/currentdate' className='btn list-group-item list-group-item-action'>Current Date</Link>
                    <Link to='/tasks' className='btn list-group-item list-group-item-action'>Tasks</Link>
                    <Link to='/goToFuckUrself' className='btn list-group-item list-group-item-action'>404</Link>
                </ul>
                <div className='btns'>
                    <div>
                        <button className='btn btn-success' onClick={this.ShowFirstText}>
                            {this.state.firstchildVisible ? 'close' : 'open'}
                        </button>

                        {this.state.firstchildVisible
                            ? <FirstChild />
                            : null}
                    </div>
                    <div>
                        <button className='btn btn-success'  onClick={this.ShowSecondText}>
                            {this.state.secondChildVisible ? 'close' : 'open'}
                        </button>
                        {this.state.secondChildVisible
                            ? <SecondChild />
                            : null}
                    </div>
                </div>
            </div>

        )
    }
}