const loginService = {
    authenticate: (username, password) => {
        // Retrieve users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Find user with matching username and password
        let user = users.find(user => user.username === username && user.password === password);

        // If user is found, authentication succeeds
        if (user) {
            console.log("Authentication successful.");
            return true;
        } else {
            alert("Authentication failed. Invalid username or password.");
            console.log("Authentication failed. Invalid username or password.");
            return false;
        }
    }
};

export default loginService;
