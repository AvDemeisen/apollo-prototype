import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "./Select.scss";

const Select = ({ change, name, query }) => {
	return (
		<div className="select-wrapper">
			<select className="select-dropdown" onChange={change} name={name} >
				<option className="select-dropdown__default">Select Artist</option>
				<Options query={query} />
			</select>
		</div>
	)
}

const Options = ({ query }) => {
	const { loading, error, data } = useQuery(query);

	return loading ?
		<option disabled>Loading authors</option> : error ?
			<option disabled>Error</option> :
			data.artists.map(({ id, name }) => (
				<option key={id} value={id}>{name}</option>
			))
}

export default Select