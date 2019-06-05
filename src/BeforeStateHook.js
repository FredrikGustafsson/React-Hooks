// This is some code showing how you would solve things before you got the State Hook

import React from 'react';
class BeforeStateHook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0 // Initial value for our counter
        };

        this.setCount = this.setCount.bind(this);
    }

    setCount(numb) {
        this.setState({
            count: numb
        })
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setCount(this.state.count + 1)}>
                    Click me
                </button>
            </div>
        );
    }
}
export default BeforeStateHook;