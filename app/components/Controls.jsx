import React from 'react';

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onStatusChange(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    }

    render() {
        const { countdownStatus } = this.props;

        const renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Paused</button>
            } else {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        }

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
}

export default Controls;