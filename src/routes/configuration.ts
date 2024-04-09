import * as express from "express";
import * as token from "../api/TokenApi";

let router = express.Router();
router.use('/FetchToken',token)
//router.use('/FAQ',)
export = router;
