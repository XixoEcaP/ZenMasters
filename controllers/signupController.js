import signupView from "../views/signupView.js"
import signupService from "../services/signup-service.js"
let signupController = {
    init: () => {
        signupView.show();
        signupService.getInput();
    },

}

export default signupController;
