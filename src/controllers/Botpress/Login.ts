import { Request, Response, NextFunction, response } from "express";
import { config } from "process";
import * as configuration from "../../env/DEV";
import axios from "axios";
const CryptoJS = require("crypto-js");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const path = require("path");

export class LoginController {
  fetchToken= async (req: Request, res: Response, next: NextFunction) => {
    try {
      var qs = require("qs");
      var data = qs.stringify({
        client_id: "admin-cli",
        refresh_token: req.body.refresh_token,
        grant_type: "refresh_token",
      });
      var loginAPI = {
        method: "post",
        url:
          configuration.configuration.botURL +
          "Endpoint",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(loginAPI)
        .then(function (response) {
          return res.status(200).send({ status:"Success", access_info: response.data });
        })
        .catch(function (error) {
          console.log("second Cath function", error);
          return res.status(500).send({ status:"Failure", error: error });
        });
    


    }catch (error) {
      console.log("inside Try catch error block");
      return res.status(500).send({ error: error });
    }
  };
}
