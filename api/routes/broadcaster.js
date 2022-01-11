const express = require("express");
const router = express.Router();
const db = require("../db");

var multer  = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var bodyParser = require('body-parser')
const fs = require('fs');
var xlsxtojson = require("xlsx-to-json-lc");
var AdmZip = require('adm-zip');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });