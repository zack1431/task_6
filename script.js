
  //Solving problems using array functions on rest countries data.
//Get all the countries from Asia continent /region using Filter function
var response;
  function getxhttprequest(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        response  = JSON.parse(this.responseText);
        getData(response)
    }
    xhttp.open("GET", "https://restcountries.com/v2/all");
    xhttp.send();
    
  }
    
  getxhttprequest();

  function getData(response){
      let regionAsia = response.filter(res => res.region == 'Asia');
      console.log(regionAsia);
      let populate = response.filter(res => res.population < 200000);
      var total = 0, currency = [];
        console.log(populate);
        response.forEach((val,key) =>{
          console.log('Name: '+val.name+'\n'+'Capital: '+val.capital+'\n'+'Flag: '+val.flag)
          var temp = val.hasOwnProperty('currencies') ? val.currencies.filter(res => res.code == 'USD') : [];
            if(temp.length > 0){
                currency.push(val);
            }
           
        })
        total = response.map(x => x.population).reduce((acc, y) => acc + y)
        console.log(total);

        console.log(currency);
  } 

  
  
  
  