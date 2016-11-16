import React from 'react'
import ReactDOM from 'react-dom'

import styles from './app.styl'

class App extends React.Component {
    render() {
        return (
        	<div>
        		<h1>React Quick Start</h1>
        	</div>
    	)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));