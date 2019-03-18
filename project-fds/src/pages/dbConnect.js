import React from "react";

import axios from "axios";
import PropTypes from "prop-types";

export default class DBConnect extends React.Component {

	static get propTypes() {
		return {
			data: PropTypes.any
		};

	}

	
	state = {
		data: []
	}

	componentDidMount() {
		// var apigClient = aws.apigClientFactory.newClient({
		// 	accessKey: 'AKIAIFUHJP5V22H6K6KA',
		// 	secretKey: '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',
		//   });

// 		var apigClientFactory = require('aws-api-gateway-client').default;
// 		var apigClient = apigClientFactory.newClient({
// 			invokeUrl:'https://shr4ny5edi.execute-api.us-east-1.amazonaws.com',
// 			apiKey: 'uQ7ipyNhNb7xNSNJr65Hy3JvplPPXmF49FwTNIRg',
// 			region: 'eu-east-1'
// 		  });
		 
// 		  var pathParams = {
			
// 		};	

// 		  var method = 'GET';

// 		var pathTemplate = '/default/admin?operation=readall'
		
// 		var additionalParams = {
//     //If there are query parameters or headers that need to be sent with the request you can add them here
// 	headers: {
// 		"cache-control": "no-cache",
// 		"x-api-Key": "uQ7ipyNhNb7xNSNJr65Hy3JvplPPXmF49FwTNIRg" ,
// 				"Accept": "application/json",
// 				"Content-Type": "application/json",
// 				"X-Amz-Date": "20190307T190234Z",
// 				"Access-Control-Allow-Origin": "*",
// 					}			
// 				};
	
// 	var body = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://shr4ny5edi.execute-api.us-east-1.amazonaws.com",
// 	"method": "GET",
// }

// apigClient.invokeApi(pathParams, pathTemplate, method, additionalParams, body)
//     .then(function(result){
//         //This is where you would put a success callback
//     }).catch( function(result){
//         //This is where you would put an error callback
//     });
	  
		//   axios.get("https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/admin?operation=readall", body)
		// 	.then(res => {
		// 		const data = res.data;
		// 		// eslint-disable-next-line no-console
		// 		console.log(res);
		// 		this.setState({ data });
		// 	});
	  


		const url = "https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/admin?operation=readAll";
		let config = {
			headers: { 
				"x-api-Key": "uQ7ipyNhNb7xNSNJr65Hy3JvplPPXmF49FwTNIRg" ,
				"Content-Type": "application/json"
			}
		};

		//axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.get(url, config)
			.then(res => {
				// eslint-disable-next-line no-console
				let data = JSON.parse(res.data.body);
				console.log(data);
				//var newData = this.state.data.concat([data]);
				this.setState( {data: data} );
			});

	
}
 

	render() {
		let data = this.state.data;

		return (

		// 	<div>
		// 		{this.state.data.map(admin => <h1 key={admin.id}>{admin.fullname}</h1>)}
		// 	</div>
		// );
<div>
		{(data && data.length > 0) ?
            <div className="table-responsive">
              <table className="pure-table">
                <tbody>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>password</th>
                  </tr>

                  {data.map((item) => {
                    return (
                        <tr key={item.id}>
						<td>{item.id}</td>
                          <td>{item.fullname}</td>
						  <td>{item.email}</td>
						  <td>{item.pass}</td>
                        </tr>
                    );
				  })}
                </tbody>
              </table></div> : <p><strong>Nothing to show</strong></p>} 
			  </div>

		);
				}
}