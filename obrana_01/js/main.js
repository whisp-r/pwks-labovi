var ipAddr = "ip_address";
var ipAddrErr = "ip_error";
var submask = "ip_submask";
var submaskErr = "submask_error";


var ipAddrRegex = new RegExp(
  "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
);

var submaskRegex = new RegExp(
  "^\\d+$",
);

function submaskRegexTestRange(s) {
  if (!submaskRegex.test(s)) return false;
  const n = Number(s);
  return n >= 1 && n <= 1025;
}


function ipRegexCheck() {
  const ipValue = document.getElementById(ipAddr).value;
  if (ipAddrRegex.test(ipValue)) {
    document.getElementById(ipAddrErr).innerHTML = "";
  } else {
    document.getElementById(ipAddrErr).innerHTML = "Invalid IP";
  }
}

function submaskRegexCheck() {
  const submaskValue = document.getElementById(submask).value;
  if (!submaskRegexTestRange(submaskValue)) {
    document.getElementById(submaskErr).innerHTML = "Invalid submask";
  } else {document.getElementById(submaskErr).innerHTML = "";

  }
}

document
  .getElementById(ipAddr)
  .addEventListener("focusout", ipRegexCheck);

document
  .getElementById(submask)
  .addEventListener("focusout", submaskRegexCheck);
