const express = require('express')
const router = express.Router()

const {imageUpload, videoUpload, imageReduceUpload, localFileUpload}= require('../controllers/fileUpload')

// api route
router.post("/localFileUpload",localFileUpload)
router.post("/imageUpload",imageUpload)
router.post("/videoUpload",videoUpload)
router.post("/imageReduceUpload",imageReduceUpload)

module.exports = router