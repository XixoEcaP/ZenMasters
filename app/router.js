import homeController from "../controllers/home-controller.js";
import loginController from "../controllers/login-controller.js";
import signupController from "../controllers/signupController.js";
import mainpageController from "../controllers/mainpage-controller.js"
import mainpage1Controller from "../controllers/mainpage1-controller.js"
import mainpage2Controller from "../controllers/mainpage2-controller.js"
import mainpage3Controller from "../controllers/mainpage3-controller.js"
import mainpage4Controller from "../controllers/mainpage4-controller.js"
import mainpage5Controller from "../controllers/mainpage5-controller.js"
import mainpage6Controller from "../controllers/mainpage6-controller.js"
import mainpage7Controller from "../controllers/mainpage7-controller.js"
import mainpage8Controller from "../controllers/mainpage8-controller.js"
import mainpage9Controller from "../controllers/mainpage9-controller.js"
import mainpage10Controller from "../controllers/mainpage10-controller.js"
import mainpage11Controller from "../controllers/mainpage11-controller.js"
import mainpage12Controller from "../controllers/mainpage12-controller.js"

let router;

router = {

    routes: {

        home: {
            hash: "#home",
            controller: homeController
        },
        login : {
            hash: "#login",
            controller: loginController
        },

        singup: {
            hash: "#signup",
            controller: signupController
        },

        mainpage: {
            hash: "#mainpage",
            controller: mainpageController
        },
        mainpage1: {
            hash: "#mainpage1",
            controller: mainpage1Controller
        },
        mainpage2 : {
            hash: "#mainpage2",
            controller: mainpage2Controller
        },
        mainpage3:{
            hash: "#mainpage3",
            controller: mainpage3Controller
        },
        mainpage4: {
            hash: "#mainpage4",
            controller: mainpage4Controller
        },
        mainpage5:{
            hash: "#mainpage5",
            controller: mainpage5Controller
        },
        mainpage6:{
            hash:"#mainpage6",
            controller: mainpage6Controller
        },
        mainpage7:{
            hash:"#mainpage7",
            controller: mainpage7Controller
        },

        mainpage8:{
            hash:"#mainpage8",
            controller: mainpage8Controller
        },
        
        mainpage9:{
            hash:"#mainpage9",
            controller: mainpage9Controller
        },
        mainpage10:{
            hash:"#mainpage10",
            controller: mainpage10Controller
        },
        mainpage10:{
            hash:"#mainpage10",
            controller: mainpage10Controller
        },
        mainpage11:{
            hash:"#mainpage11",
            controller: mainpage11Controller
        },
        mainpage12Controller: {
            hash: "#mainpage12",
            controller: mainpage12Controller
        }

    
    },


    start: () => {

        router.routes.home.controller.init();

        $(window).on("hashchange", () => {

            try {
                router.getRoute(router.routes);

            }
            catch (err) {
                window.location.hash = "#home";
                router.routes.home.controller.init();

            }

        })
    },

    getRoute:(routes) => {
        var obj= Object.values(routes).find((route) => route.hash === window.location.hash);

        obj.controller.init();
    }




}

export default router;