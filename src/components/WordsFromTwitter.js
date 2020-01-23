import React from "react";
import useAxios from "@use-hooks/axios";
import ReactWordcloud from "react-wordcloud";

const WordsFromTwitter = props => {
	const { response, loading, error, reFetch } = useAxios({
		url: props.endpoint || "",
		method: "GET",
		trigger: ""
	});
	props.loading(loading);
	if (loading) return <div> Cargando... </div>;
	if (error) return <div> Estamos trabajando... </div>;
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
					fontFamily: "Roboto",
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
