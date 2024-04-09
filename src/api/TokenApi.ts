import * as express from "express";
import {LoginController} from "../controllers/Botpress/Login";

const loginController: LoginController = new LoginController();
let router = express.Router();
router.get("/", loginController.fetchToken);

export = router;
