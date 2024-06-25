import express from "express";
import {uploadfile,downloadfile} from '../controller/file-controller.js'
import upload from '../utils/upload.js';

const router =express.Router();

router.post('/upload', upload.single('file'), uploadfile);
router.get('/file/:fileId',downloadfile);
export default router;