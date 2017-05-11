import React from 'react';

class Select extends React.Component {
    constructor () {
        super();
        this.state = {
            open: false
        }
    }

    handleClick () {
        return (
            console.log(this.state.open)
        )
    }

    render () {
        return (
            <div className={'select ' + this.props.customClassNames}>
                <div className="select-trigger" onClick={this.handleClick.bind(this)}>{this.props.trigger}</div>
                <div className="select-content"></div>
            </div>
        )
    }
}

export default Select;