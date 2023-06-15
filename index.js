// Add your code here
function submitData(userName, userEmail)
{
    const destinationURL = 'http://localhost:3000/users';

    const formData = {
        "name": userName,
        "email" : userEmail,
    };

    const configurationObject = {
        method: "POST",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch(destinationURL, configurationObject)
    .then(response => response.json())
    .then(function (v)// append value to the DOM
    {
        document.body.innerHTML = 
        `<h1>
        ${v.id}
        \n                
        "Name: " ${v.name}
        \n                
        " Email: "  ${v.email}
        \n
        </h1>`
    }) 
    .catch(function (error) {
        document.body.innerHTML = 
        `<h1> 
            ${(error.message)}
        </h1>`
      });
}