// Fetches the testing data from the github page hosting it. Eventually, you'll want to 
// fetch from your own backend.


function getData(){
    return fetch('https://soroushf79.github.io/TechAssistTesting/data.json') // Hosted the updated new data on here
    .then(function(response) {
      if (!response.ok){
        throw Error(response.statusText);
      }
      console.log("Bueno");
      return response.json();
    })
    .catch(function(error) {
      console.log("No bueno");
    });
  }

  export default getData;

  //const w = Object.keys(data).map(function(bulletin, index){
   // return(<button onClick={()=> displayData(data[bulletin])}>{bulletin}</button>);
  //})
