import './App.css';
import Row  from "./Components/Row/Row";
import React from 'react';
import request from "./request";

function App() {
  return (
		<div>
			<h1>Netflix clone</h1>
			<Row  title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
			<Row  title="Trending Now" fetchUrl={request.fetchTrending}/>
		</div>
	);
}

export default App;
