import React, { useState } from "react";
import styled, { css } from "styled-components";
import useAxios from "@use-hooks/axios";
import ReactWordcloud from "react-wordcloud";

const WordsFromTwitter = () => {
	const { response, loading, error, reFetch } = useAxios({
		url: "http://192.168.8.135:8080/freqs",
		method: "GET",
		trigger: ""
	});
	if (loading) return <p> Cargando... </p>;
	if (error) return <p> Estamos trabajando... </p>;
	console.log(response, loading, error);
	if (response)
		return (
			<ReactWordcloud
				words={response.data.data}
				minSize={[ 400, 400 ]}
				options={{
					colors: [
						"#2f1082",
						"#e26b6b",
						"#fa8887",
						"#d36766",
						"#1f1f1f",
						"#9172b1",
						"#808bff",
						"#7d84d5",
						"#5cc9f5",
						"#7d7d7d",
						"#4c95b2",
						"#89cda6",
						"#979797",
						"#fdc343",
						"#90715a"
					],
					enableTooltip: true,
					deterministic: false,
					fontFamily: "verdana",
					fontSizes: [ 9, 40 ],
					fontStyle: "normal",
					fontWeight: 500,
					padding: 1,
					rotations: 2,
					rotationAngles: [ 0, 90 ],
					scale: "sqrt",
					spiral: "rectangular",
					transitionDuration: 1000
				}}
				maxWords={500}
			/>
		);
	return <div>Estamos trabajando...</div>;
};

export default WordsFromTwitter;
