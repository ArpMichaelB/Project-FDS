//MaintenancePortalHome.test.js
import axios from "axios";

jest.mock("axios");

it("returns a string of a JSON object", () => {
	axios.get.mockImplementation( ()=> Promise.resolve({status: 200, data: {}}));
});
