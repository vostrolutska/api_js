import axios from "axios";
import chai from "chai";
import { url } from "./endpoints.js";
import { requestData, responseUpload, responseMetadata } from "./data.js";
import { baseHeaders, headersUpload } from "./headers.js";

const { expect } = chai;

const { uploadUrl, getUrl, deleteUrl } = url;

describe("HTTP Requests for Dropbox", () => {
  it("should upload a file", async () => {
    const response = await axios.post(uploadUrl, null, headersUpload);
    expect(response.status).to.equal(200);
    expect(response.data).to.deep.include(responseUpload);
    console.log("File uploaded successfully:", response.data);
  });

  it("should get metadata info", async () => {
    const response = await axios.post(getUrl, requestData, baseHeaders);
    expect(response.status).to.equal(200);
    expect(response.data).to.deep.include(responseMetadata);
    console.log("Metadata retrieved successfully:", response.data);
  });

  it("should delete file", async () => {
    const response = await axios.post(deleteUrl, requestData, baseHeaders);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("metadata");
    console.log("File deleted successfully:", response.data);
  });
});
