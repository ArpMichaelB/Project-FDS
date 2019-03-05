import React from "react";
import "./style.css";

import { Card, Collapse } from "antd";
const Panel = Collapse.Panel;
const { Meta } = Card;

const OurTeam = () => {
	return (
		<div>
			<h1 className="title">Ownership Team</h1>
			<div className="OwnershipT">
				
				<div className="teamCardsDiv">
                
					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						<Collapse>
							<Panel header="Background" key="1">
								<p>Background</p>
							</Panel>
							<Panel header="Contact Information" key="2">
								<p>Email</p>
								<p>Phone</p>
							</Panel>
					
						</Collapse>
					</Card>

					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						<Collapse>
							<Panel header="Background" key="1">
								<p>Background</p>
							</Panel>
							<Panel header="Contact Information" key="2">
								<p>Email</p>
								<p>Phone</p>
							</Panel>
					
						</Collapse>
					</Card>

					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						<Collapse>
							<Panel header="Background" key="1">
								<p>Background</p>
							</Panel>
							<Panel header="Contact Information" key="2">
								<p>Email</p>
								<p>Phone</p>
							</Panel>
					
						</Collapse>
					</Card>

					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						<Collapse>
							<Panel header="Background" key="1">
								<p>Background</p>
							</Panel>
							<Panel header="Contact Information" key="2">
								<p>Email</p>
								<p>Phone</p>
							</Panel>
					
						</Collapse>
					</Card>
					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						<Collapse>
							<Panel header="Background" key="1">
								<p>Background</p>
							</Panel>
							<Panel header="Contact Information" key="2">
								<p>Email</p>
								<p>Phone</p>
							</Panel>
					
						</Collapse>
					</Card>
					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						<Collapse>
							<Panel header="Background" key="1">
								<p>Background</p>
							</Panel>
							<Panel header="Contact Information" key="2">
								<p>Email</p>
								<p>Phone</p>
							</Panel>
					
						</Collapse>
					</Card>
					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						<Collapse>
							<Panel header="Background" key="1">
								<p>Background</p>
							</Panel>
							<Panel header="Contact Information" key="2">
								<p>Email</p>
								<p>Phone</p>
							</Panel>
					
						</Collapse>
					</Card>
					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						<Collapse>
							<Panel header="Background" key="1">
								<p>Background</p>
							</Panel>
							<Panel header="Contact Information" key="2">
								<p>Email</p>
								<p>Phone</p>
							</Panel>
					
						</Collapse>
					</Card>
				</div>
			</div>

			<h1 className="title">Office Team</h1>
			<div className="OfficeT">
				
				<div className="teamCardsDiv">
                            
					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						<Collapse>
							<Panel header="Contact Information" key="1">
								<p>Email</p>
								<p>Phone</p>
							</Panel>
						</Collapse>
					</Card>
				</div>
			</div>

			<h1 className="title">Maintenance Team</h1>
			<div className="MaintenanceT">
				
				<div className="teamCardsDiv">
                
					<Card className="ourTeamCards" 
						cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					>
						<Meta title="Name" style={{marginBottom: "0.6rem"}}/>
						{/* <Collapse>
					</Collapse> */}
					</Card>
				</div>
			</div>
		</div>
	);
};

export default OurTeam;

