function changeCSS(stylesheet) {
    const stylesheetLink = document.getElementById("CSS_Stylesheet");
  
    if (stylesheet === "stylesheet1") {
      stylesheetLink.href = "css/stylesheet1.css";
    } else if (stylesheet === "stylesheet2") {
      stylesheetLink.href = "css/stylesheet2.css";
    } else if (stylesheet === "stylesheet3") {
      stylesheetLink.href = "css/stylesheet3.css";
    } else if (stylesheet === "stylesheet4") {
      stylesheetLink.href = "css/stylesheet4.css";
    }
  }
  
  function removeCSS() {
    const stylesheetLink = document.getElementById("CSS_Stylesheet");
    stylesheetLink.href = "";
  }
  