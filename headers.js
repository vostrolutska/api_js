import dotenv from "dotenv";
dotenv.config();

const accessToken = process.env.ACCESS_TOKEN;

export const baseHeaders = {
  Authorization: `Bearer ${accessToken}`,
  "Content-Type": "application/json",
};

export const headersUpload = {
  ...baseHeaders,
  "Content-Type": "application/octet-stream",
  "Dropbox-API-Arg": JSON.stringify({
    path: "/tree-736885_1280.jpg",
  }),
};
