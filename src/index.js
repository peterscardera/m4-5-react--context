import React from 'react';
import ReactDOM from 'react-dom';
// import items from './data'
import App from './components/App';
import { GameProvider } from "./components/GameContext"

const rootElement = document.getElementById('root');

ReactDOM.render(
<GameProvider>
<App />
</GameProvider>
,rootElement

);
