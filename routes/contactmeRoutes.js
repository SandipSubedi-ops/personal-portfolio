const express = require('express');
const router = express.Router();


router.route("/contactme").post(contactmeController.contacme)