import React from "react";
import './Counter.css';

class Home extends React.Component {

    constructor () {
		super()
		this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
		};
    }
    
    componentWillMount() {
        this.getTimeUntil("April 1, 2020");
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil("April 1, 2020"), 1000);
    }

    leading0(num) {
        return num < 10 ? "0" + num : num;
    }

    getTimeUntil(event_date) {
        const time = Date.parse(event_date) - Date.parse(new Date());
        if (time < 0) {
          this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          const seconds = Math.floor((time / 1000) % 60);
          const minutes = Math.floor((time / 1000 / 60) % 60);
          const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
          const days = Math.floor(time / (1000 * 60 * 60 * 24));
          this.setState({ days, hours, minutes, seconds });
        }
      }


	render() {
    	return (
			<div class="counter_body darken-pseudo">
        <div class="counter_text">    
          <h2>Race starting in...</h2> 
          <div class="time">
              <div class="counter_number">{this.leading0(this.state.days)}<div class="counter_label">Days</div></div>
              <div class="counter_number">{this.leading0(this.state.hours)}<div class="counter_label">Hours</div></div>
              <div class="counter_number">{this.leading0(this.state.minutes)}<div class="counter_label">Minutes</div></div>
              <div class="counter_number">{this.leading0(this.state.seconds)}<div class="counter_label">Seconds</div></div>
          </div>
        </div>
      </div>
		);
	}
}
export default Home;