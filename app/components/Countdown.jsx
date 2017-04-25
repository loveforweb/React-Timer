import React from 'react';
import Clock from 'Clock';

class Countdown extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Countdown</p>
                <Clock totalSeconds={129} />
            </div>
        )
    }
}

export default Countdown;