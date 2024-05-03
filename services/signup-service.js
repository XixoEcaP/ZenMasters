let array = [];
let ver = true;
let signupService = {
    getInput: () => {
        $("#submitsign").on("click", () => {
            let user = {
                username: $("#usernamesignup").val(),
                password: $("#passwordsignup").val(),
                email: $("#emailsignup").val()
            };

            // Check if localStorage is empty
            if (localStorage.length === 0) {
                localStorage.setItem(localStorage.length + 1, JSON.stringify(user));
                window.location.hash = "#home";
                console.log("First account created");
                return;
            }

            // Check if username or email already exists in localStorage
            let isDuplicate = false;
            for (let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    let client = localStorage.getItem(key);
                    let objectClient = JSON.parse(client);

                    if (user.username === objectClient.username || user.email === objectClient.email) {
                        alert("Account already taken. Please choose a different username or email.");

                         console.log("Account already taken");
                        isDuplicate = true;
                        break;
                    }
                }
            }

            if (!isDuplicate) {
                alert("Welcome to Zen Master dear " + user.username + ". Please Login to continue your journey");

                localStorage.setItem(localStorage.length + 1, JSON.stringify(user));
                window.location.hash = "#home";
                console.log("Account created successfully");

                // Retrieve existing users from localStorage or initialize an empty array
                let users = JSON.parse(localStorage.getItem("users")) || [];

                // Add the new user to the array
                users.push(user);

                // Store the updated user data back in localStorage
                localStorage.setItem("users", JSON.stringify(users));
            }
        });
    }
};

export default signupService;


