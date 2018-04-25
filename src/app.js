import 'antd/dist/antd.less';
import './style/custom.less'
/* 覆盖less ,修改主题 */
import dva from 'dva';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	createLogger
} from 'redux-logger';
import {message} from 'antd'
import routes from './router'
var app = null;


app = dva({
	onAction: createLogger(),
	onError(error) {
		message.destroy();
		message.error(error.message);
	},
});
// app = dva({});
app.model(require('./models/shop/index.js').default);
app.model(require('./models/shop/add.js').default);
app.model(require('./models/shop/edit.js').default);


app.model(require('./models/design/model_design_global').default)
app.model(require('./models/design/model_edit').default)
app.model(require('./models/design/mode_upload').default)
app.model(require('./models/model_layout').default);

app.router(routes);
app.start("#root");

if (module.hot) {
	app.start("#root");
	module.hot.accept();
}