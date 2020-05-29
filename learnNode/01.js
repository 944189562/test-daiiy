const axios = require("axios");
var method = "PUT";
var headers = {
  "Content-Type": "application/octet-stream",
};

var content = "Hello OBS";

var reopt = {
  method: method,
  url:
    "https://th1bkk-test-bucket.obs.ap-southeast-2.myhuaweicloud.com/a_1e6ftidsv1jpc566gg31olf147u0.xlsx?AWSAccessKeyId=XVBCFYAHA3QEJWQKJIKC&Expires=1587524805&Signature=KY9av2H%2BqcdhGW0TTmjvuMUDuxw%3D",
  withCredentials: false,
  headers: headers,
  validateStatus: function (status) {
    return status >= 200;
  },
  maxRedirects: 0,
  responseType: "text",
  data: content,
};

axios
  .request(reopt)
  .then(function (response) {
    if (response.status < 300) {
      console.log("Creating object using temporary signature succeed.");
    } else {
      console.log("Creating object using temporary signature failed!");
      console.log("status:" + response.status);
      console.log("\n");
    }
    console.log(response.data);
    console.log("\n");
  })
  .catch(function (err) {
    console.log("Creating object using temporary signature failed!");
    console.log(err);
    console.log("\n");
  });
