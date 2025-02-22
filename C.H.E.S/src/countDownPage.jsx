import React from 'react';
<link href="https://fonts.googleapis.com/css2?family=Cosmic&display=swap" rel="stylesheet"></link>
export default class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 3
        };
        this.timer = null; 
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(prevState => {
                if (prevState.count > 0) {
                    return { count: prevState.count - 1 };
                } else {
                    clearInterval(this.timer); 
                    return null; 
                }
            });
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timer); 
    }

     render() {
        const { count } = this.state;
    
            // Define the cosmic style
            const cosmicStyle = {
                fontFamily: 'Cosmic, sans-serif', // Ensure you have included the Cosmic font
                fontSize: '15em',
                color: 'red'
            };
    
            return (
                <div style={cosmicStyle}>
                    {count}
                </div>
            );
    }
}