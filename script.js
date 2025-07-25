function changeTab(tab) {
      let ids = ["home", "projects", "socials", "application"];
      ids.forEach(id => {
        document.getElementById(id + "_value").style.display = (id == tab) ? "block" : "none";
      });
    }
    function chooseApplication(application) {
      if (application == "member") {
        document.getElementById("application_choose_application").style.display = "none";
        document.getElementById("application_member_choose_way").style.display = "block";
      } else if (application == "supporter") {
        document.getElementById("application_choose_application").style.display = "none";
        document.getElementById("application_supporter_choose_way").style.display = "block";
      }
    }
    function chooseWay(application, way) {
      if (application == "member" && way == "discord") {
        window.location.href = "https://discord.com/channels/1248732382010278059/1253713307664253000";
      } else if (application == "member" && way == "document") {
        document.getElementById("application_member_choose_way").style.display = "none";
        document.getElementById("application_member_document").style.display = "block";
      } else if (application == "supporter" && way == "discord") {
        window.location.href = "https://discord.com/channels/1248732382010278059/1253713307664253000";
      } else if (application == "supporter" && way == "document") {
        document.getElementById("application_supporter_choose_way").style.display = "none";
        document.getElementById("application_supporter_document").style.display = "block";
      }
    }
