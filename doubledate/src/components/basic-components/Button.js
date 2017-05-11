import React from 'react';

class Button extends React.Component {
    handleClick () {
        return (
            this.setState({customClassName: 'Clicked'})
        )
    }

    render () {
        return (
            <div className={'btn ' + this.props.customClassNames} onClick={this.handleClick.bind(this)}>
                sdfsdf
            </div>
        )
    }
}

export default Button;