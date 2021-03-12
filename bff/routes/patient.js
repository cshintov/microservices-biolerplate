const express = require('express');
const path = require('path');
const axios = require("axios");
const rootDir = require('../utils/path');

const router = express.Router();

const insurance = {
    "method": "get",
    "url": "http://patins:8081/patient/insurance/detail",
    "headers": {
        "User-Agent": "BFF-1"
    }
};

const basicInfo = {
    "method": "get",
    "url": "http://patdemo:8082/patient/basic?pid=7728",
    "headers": {
        "User-Agent": "BFF-1"
    }
};

router.get('/v1/demo', async (req, res, next) => {

    let basicData = insData = {};

    try {
        insData = await axios(insurance);
    } catch(err) {
        insData = { data: { error: 1}}
    }

    try {
        basicData = await axios(basicInfo);
    } catch (err){
        console.log(err);
        basicData = { data: { error: 1}}
    }

    sendDemographics(res, insData, basicData);
});

const sendDemographics = (res, insRes, basicRes) => {

    const response = {
        auth: {},
        payload: {
            ins: {},
            basic: {}
        }
    };

    const insData = typeof insRes.data === undefined ? { error: 1} : insRes.data;
    const basicData = typeof basicRes.data === undefined ? { error: 1} : basicRes.data;

    if (!insData.error.status) {
        response.payload.ins = { error: 1};
    } else {
        response.payload.ins = insData.payload;
    }

    if (basicData.error) {
        response.payload.basic = basicData;
    } else {
        response.payload.basic = basicData.Payload;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
};

module.exports = router;
