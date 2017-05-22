import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
   		<App />
  	</MuiThemeProvider>
  	, document.getElementById('app')
);