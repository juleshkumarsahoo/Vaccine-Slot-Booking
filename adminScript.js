let userDataInAdmin = JSON.parse(localStorage.getItem("user"));

function showData() {
  userDataInAdmin.map((item) => {
    type = document.createElement("td");
    type.appendChild(document.createTextNode(item.username));

    type1 = document.createElement("td");
    type1.appendChild(document.createTextNode(item.usermail));

    type2 = document.createElement("td");
    type2.appendChild(document.createTextNode(item.userage));

    type3 = document.createElement("td");
    type3.appendChild(document.createTextNode(item.userphone));

    type4 = document.createElement("td");
    type4.appendChild(document.createTextNode(item.useraadhar));

    type5 = document.createElement("td");
    type5.appendChild(document.createTextNode(item.useradress));

    type6 = document.createElement("td");
    type6.appendChild(document.createTextNode(item.userdate));

    trow = document.createElement("tr");
    trow.appendChild(type);
    trow.appendChild(type1);
    trow.appendChild(type2);
    trow.appendChild(type3);
    trow.appendChild(type4);
    trow.appendChild(type5);
    trow.appendChild(type6);
    document.getElementById("parent").appendChild(trow);
     // console.log(item.username);
  });
}
showData();

