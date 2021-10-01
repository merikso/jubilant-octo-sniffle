// declare the url which is our destination for a post request
const url = `http://localhost:5000/api/users/add`



let btn = document.getElementById('btn');
btn.addEventListener("click", addUser);

function addUser() {

    // Build a user object from the input fields by querying the DOM and fetching
    let ifirstName = document.getElementById('firstName').value
    let ilastName = document.getElementById('lastName').value
    let iusername = document.getElementById('username').value
    let ipassword = document.getElementById('password').value
    let iemail = document.getElementById('email').value

    // ideally we validate all of the values before including them in our request to the server

    // build the user obj literal
    let user = {
        firstName: ifirstName,
        lastName: ilastName,
        username: iusername,
        password: ipassword,
        email: iemail
    };

    // we need to build our request OPTIONS (set up the method, body, headers)
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // send the POST request with fetch()
    fetch(url, options)
        .then(res => res.json())
        .then(res => console.log(res))

}