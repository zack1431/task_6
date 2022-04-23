
/*How to compare two JSON have the same properties without order?*/
function checkObjCompare(){
    var obj1 = { name: "Person 1", age:5 };
    var obj2 = { age:5, name: "Person 1" };
  
    let c = _.isEqual(obj1, obj2) ? 'object is same' : 'object is different'
    console.log(c)
    
  }
  // checkObjCompare()
  /*xhttp request example*/
  /*2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
  3.Use the same rest countries and print all countries name, region, sub region and population
  */
  function getxhttprequest(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      let response  = JSON.parse(this.responseText);
      response.forEach(val =>{
          // console.log(val)
        document.write('<img src='+val.flag+' width="50" height="50">')//not able to print in console so printed on window
        console.log('Name: '+val.name+'\n'+'Region: '+val.region+'\n'+'Sub Region: '+val.subregion+'\n'+'Population: '+val.population)
      })
    }
    xhttp.open("GET", "https://restcountries.com/v2/all");
    xhttp.send();
  }
    
  // getxhttprequest();
  /*fetch api request example get based on id or get all data*/
  
  function getBasedOnId(){
    fetch('https://jsonplaceholder.typicode.com/posts?id=10')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  
  
  function checkString(str){
    if(str.length > 6) return true;
    else return false;
  }
  
    /*delete request*/
    function deleteapi(){
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      }).then((response) => console.log(response));
    }
    // deleteapi();
  
    function getall(){
    fetch('https://restcountries.com/v2/all',{
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
    // getall();
  
      /*update request*/
    function updateapi(){  
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }
    // updateapi();
  
    /*post api*/
  
  function postData(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  
  let a = [1,2,3,-5,-3,-2]
  
  function checkNum(){
    let b;
    a.forEach(val =>{
        b = isNaN(val) ? 'positive' : 'negative';//math.sign()
        console.log(val+' '+b);
    })
  }
  // checkNum();
  
  let b = "guvi"
  const str = () =>{
   return b.split("").reverse().join("")
  }
  // console.log(str());
  var asp = [2,3,4,5]
  var bsp = [4,5,6,7]
  
  function add(a){
    let sums = 0;
    a.forEach(val =>{
      sums = sums + parseInt(val)
    })
    console.log(sums)
  
  
  }
  asp.push(...bsp)
  add(asp)
  //function with spread operator
  // function strs(...str){
  //   let returnstr = []
  //   for(let a of str){
  //       returnstr = ([...returnstr,a.length])
  //   }
  //   return returnstr
  // }
  
  //arrow function
  let strs = (...str) => {
    let returnstr = 0
    for(let a of str){
        returnstr += parseInt(a);
    }
    return returnstr;
  }
  console.log(strs(1,2,3,4,5));
  
  /*template literal*/
  let astr = 'Hello ';
  let bstr = 'Me';
  console.log(`${astr}${bstr}`)
  
  //Write a “person” class to hold all the details.
  
  class person {
    
    constructor(){
      var self = this;
          self.obj = {
              name : 'Zakir Shaikh',
              profession: 'developer',
              id: 1,
              btd: '31/03/1995',
              age: 27,
              nationality: 'India',
              gender: 'Male',
              hobby: 'cricket'
          }
    }
  }
  
  let information = new person().obj
  console.log(information);
  
  //write a class to calculate uber price.
  
  //Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) = Your Fare
  
  class uber {
    constructor(obj){
      var self = this;
      self.obj = obj
    }
    calculate() {
      var totalFare = 0,self=this;
      totalFare = self.obj.baseFare + parseInt(self.obj.perMin * self.obj.rideTime) + parseInt(self.obj.perKm * self.obj.rideKm);
      return totalFare.toFixed(2);
    } 
  }
  
  var getFare = new uber({
    baseFare: 48,
    perKm : 14.7,
    perMin : 1,
    rideKm : 10,
    rideTime : 32 //in min
  })
  
  console.log(getFare.calculate())
  
  