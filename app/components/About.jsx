var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is the weather app based on react.</p>
            <p>Here are some tools that I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/">React</a> - This was the JavaScript library used.
                </li>
                <li>
                    <a href="https://openweathermap.org/">Open Weather Map</a> - I used Open Weather Map API to get weather data by city name.
                </li>
                <li>
                    <a href="http://foundation.zurb.com/sites/docs/">Foundation</a> - To style this app.
                </li>
            </ul>
        </div>
    );
}

module.exports = About;
