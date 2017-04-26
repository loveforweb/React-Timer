import React from 'react';

class Controls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { countdownStatus } = this.props;

        const renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary hollow">Paused</button>
            } else if (countdownStatus === 'paused') {
                return <button className="button primary hollow">Start</button>
            }
        }

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        )
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired
}

export default Controls;