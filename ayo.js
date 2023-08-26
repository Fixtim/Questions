// Define an object that maps student IDs and passwords to PDF files
var pastPapers = {
  "N/CTE/22/2997:OLURIN": "https://eu.docworkspace.com/d/sIMO1y8rPAeeU86MG",
  "n/cte/22/3033:letmein": "https://eu.docworkspace.com/d/sIB21y8rPAdySj6UG",
  "n/cte/22/2997:123456": "https://eu.docworkspace.com/d/sIB21y8rPAdySj6UG",
  "n/cte/22/2009:123456": "https://eu.docworkspace.com/d/sIB21y8rPAdySj6UG"
};

function downloadPastPapers() {
  var studentID = document.getElementById("student-id").value;
  var password = document.getElementById("password").value;
  var isValidStudent = false;

  // Check if the student ID and password are valid
  for (var key in pastPapers) {
    if (key === studentID + ":" + password) {
      isValidStudent = true;
      break;
    }
  }

  if (!isValidStudent) {
    alert("Invalid student ID or password");
  } else {
    // If the student ID and password are valid, display the download link
    var downloadLink = "<a href='" + pastPapers[studentID + ":" + password] + "' download>Download Past Papers</a>";
    document.getElementById("pdf-download").innerHTML = downloadLink;
  }
}

