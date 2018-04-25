/* 覆盖less ,修改主题 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

ReactDOM.render(<App />,document.getElementById("root"))

if (module.hot) {
    ReactDOM.render(<App />,document.getElementById("root"))
	module.hot.accept();
}