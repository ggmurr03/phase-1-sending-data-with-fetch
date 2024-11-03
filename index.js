
//   function submitData(name, email){
//     const configurationObject = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//           },
//           body: JSON.stringify({
//             name: `${name}`,
//             email: `${email}`
//           })
//       };

//     return   fetch("http://localhost:3000/users", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//         return document.body.innerHTML= `${}`
//     })
//     .catch(function (error) {
//       alert("A fetch to the API was not found");
//       console.log(error.message);
//     });
//   }
function submitData(name, email){
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        // Assuming the response object has an id field
        document.body.innerHTML = `User ID: ${object.id}`;
      })
      .catch(function(error) {
        document.body.innerHTML = `Error: ${error.message}`;
      });
  }