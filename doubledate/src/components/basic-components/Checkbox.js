import React from 'react';
import classNames from 'classnames';

class Checkbox extends React.Component {
    constructor () {
        super();
        this.state = {
            checked: false
        };
    }

    handleClick () {
        return (
            this.setState({
                checked: !this.state.checked
            })
        )
    }

    render () {
        let classes = classNames({
            'checkbox ': true,
            'checked ': this.state.checked,
            'unchecked ': !this.state.checked
        });

        return (
            <div className={classes + this.props.customClassNames} onClick={this.handleClick.bind(this)}>
                <div className='checkbox-box'></div>
                <div className='checkbox-label'>{this.props.label}</div>
            </div>
        )
    }
}

export default Checkbox;