



function createHome(){
function reqListener () {
    let homeList = document.getElementById("homeList");
    console.log(JSON.parse(this.responseText))
    response = JSON.parse(this.responseText).data /// everything is stored in the data field.
    console.log(JSON.stringify(this.responseText))
    //console.log(this.responseText.data)
    for(var i in response){
        i = Number(i)
        console.log(i);
        data = response[i];
       // console.log(count)
        console.log(JSON.stringify(data[i + 1]));
        let name = data[i + 1].name;
        let zone_id = data[i + 1].zone_id;
        // work with .zone_id and .name here
        homeList.innerHTML += `<li class="list-group-item">${zone_id}  |  ${name}</li>`;
    }
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://jump.javin.io:5000/api/zones");
  oReq.send();
}
createHome();
function searchByZone(){
    replacestr = "";
    zone = document.getElementById("zoneList").value;
    console.log(zone)
    var url = "http://jump.javin.io:5000/api/zones/" + zone;
    var params = zone;
    var http = new XMLHttpRequest();
    
    http.open("GET", url+"?"+params, true);
    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200) {
           // alert(http.responseText);
            let response = JSON.parse(this.responseText)
            //console.log(response[zone])
            replacestr = `<li class="list-group-item">${response[zone].name} </li> `;
            let homeList = document.getElementById("homeList");
            homeList.innerHTML = replacestr;
        }
    }
    http.send(null);
    
}