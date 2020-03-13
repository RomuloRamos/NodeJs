/* eslint-disable new-cap */
const express = require("express");
const router = express.Router();
const serv = require("./feature-service");

router.get(
    "/",
    async (req, res, next) => {
        let feature = serv.getAll();
         return res.status(200).json(feature);
    },
);


module.exports = router;