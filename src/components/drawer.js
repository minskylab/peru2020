import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	display: flex;
	flex-direction: column;
	width: 0px;
	overflow: visible;
	z-index: 9;
	background-color: blue;
`;

const SideBar = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	position: relative;
	/* pointer-events: none; */
	max-height: calc(100vh - 120px);
	width: 17vw;
	transition: 0.3s;
	${props => {
		if (props.active) {
			return css`
				transform: translateX(0px) translateY(5vh) translateZ(0px);
				opacity: 1;
			`;
		}
		return css`
			transform: translateX(-20vw) translateY(5vh) translateZ(0px);
			opacity: 0;
		`;
	}};
`;

const Div1 = styled.div`
	display: block;
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	z-index: -1;
	background: white;
	box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px,
		rgba(15, 15, 15, 0.2) 0px 9px 24px;
`;

const Div2 = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	z-index: -1;
	display: block;
	transition: box-shadow 300ms ease-in 0s;
`;

const HoverCard = styled.div`
	width: 1vw;
	position: fixed;
	top: 0;
	height: 100vh;
	left: 0;
`;

const Card = styled.div`
	display: block;
	flex-shrink: 0;
	flex-grow: 0;
	padding: 25px 15px;
`;

const CardTitle = styled.div`
	font-size: 1.2em;
	margin-bottom: 0.9em;
`;

const CardText = styled.div``;

const Drawer = () => {
	const [ isShown, setIsShown ] = useState(false);
	return (
		<Container>
			<SideBar active={isShown} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
				<Div1 />
				<Div2 />
				<Card>
					<CardTitle>Perú 2020</CardTitle>
					<CardText>
						Este es un pequeño resumen de lo que viene sucediendo en Twitter sobre las elecciones congresales 2020 para
						Perú, intepreten por ustedes mismos el alcance y la influencia de algunas entidades a través de la
						frecuencia que se observan de las palabras, se actualiza en tiempo real.
					</CardText>
				</Card>
			</SideBar>
			<HoverCard onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} />
		</Container>
	);
};

export default Drawer;
