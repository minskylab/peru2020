import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Drawer from "./components/drawer";
import WordsFromTwitter from "./components/WordsFromTwitter";

const AppContainer = styled.div`text-align: center;`;

const AppHeader = styled.header`
	/* background-color: #282c34; */
	min-height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 0.3vmin);
	color: #4a4a4a;
`;

const App = () => {
	return (
		<AppContainer>
			<AppHeader>
				<Drawer />
				<WordsFromTwitter />
			</AppHeader>
		</AppContainer>
	);
};

export default App;
