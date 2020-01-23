import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Drawer from "./components/drawer";
import WordsFromTwitter from "./components/WordsFromTwitter";

const AppContainer = styled.div`text-align: center;`;

const AppHeader = styled.header`
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
	const [ isLoading, setIsLoading ] = useState(false);
	return (
		<AppContainer>
			<AppHeader>
				<Drawer activate={isLoading} />
				<WordsFromTwitter endpoint={"https://peru2020scrapper.minsky.cc/freqs"} loading={l => setIsLoading(l)} />
			</AppHeader>
		</AppContainer>
	);
};

export default App;
