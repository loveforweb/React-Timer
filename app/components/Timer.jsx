import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.handleStatusChange = this.handleStatusChange.bind(this);

        this.state = {
            count: 0,
            timerStatus: 'stopped'
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.handleStart();
                    break
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleStatusChange(newStatus) {
        this.setState ({
            timerStatus: newStatus
        })
    }

     handleStart() {
        this.timer = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000)
    }

    render() {
        const { count, timerStatus } = this.state;

        return (
            <div>
                <h1 className="page-title"></h1>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
            </div>
        )
    }
}

export default Timer;