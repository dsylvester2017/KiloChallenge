
function CreateAwardPage(){
function reqListener () {
    let awardList = document.getElementById("awardList");
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
        let award_id = data[i + 1].award_id;
        let application_id = data[i + 1].application_id;
        let zone_id = data[i + 1].zone_id;
        let pref = data[i + 1].pref;
        let entry = data[i + 1].entry;
        // work with .zone_id and .name here
        awardList.innerHTML += `<li class="list-group-item">Award Id :${award_id}  | Application Id: ${application_id} | Pref: ${pref} | Entry: ${entry}</li>`;
    }
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://jump.javin.io:5000/api/awards");
  oReq.send();
}
CreateAwardPage();
function pageListener(){
    // this formats each individual award list retrieval
}
function changeAwardPage(pageNumber){
let upperRange = pageNumber * 100; // the api only lets us retrieve 100 at a time. e.g. if on page 2, retrieving 200 to 300 page Id
let lowerRange = maxnumberOfEntries - 100;
let counter = lowerRange;

while (counter <= upperRange){
    var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", pageListener);
  oReq.open("GET", "http://jump.javin.io:5000/api/awards/"  + counter);
  oReq.send();
     

}
}