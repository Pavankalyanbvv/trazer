// Importing modules
import React, { useState, useEffect } from "react";

function Fun() {
	// usestate for setting a javascript
	// object for storing and using data
	const [data, setdata] = useState({
		age: 0,
		date: "12-12-22",
		programming: "react",
	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("/vc").then(res =>
			res.json().then(data => {
				// Setting a data from api
				setdata({
					age: data[0].LMV,
					date: data[0].date,
					programming: data[0].total_count,
				});
			})
		);
	}, []);
	return (
        <div className="App">
            <header className="App-header">
                <h1> Connecting both React and flask </h1>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p>
  
            </header>
        </div>
    );

}

export default Fun;
