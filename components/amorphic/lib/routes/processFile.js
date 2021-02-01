'use strict';

let Logger = require('../utils/logger');
let logMessage = Logger.logMessage;
let formidable = require('formidable');
let fs = require('fs');
let statsdUtils = require('@havenlife/supertype').StatsdHelper;

/**
 * Purpose unknown
 *
 * @param {unknown} req unknown
 * @param {unknown} resp unknown
 * @param {unknown} next unknown
 * @param {unknown} downloads unknown
 */
function processFile(req, resp, next, downloads) {
    let processFileTime = process.hrtime();

    if (!downloads) {
        logMessage('no download directory');
        next();

        return;
    }

    let form = new formidable.IncomingForm();
    form.uploadDir = downloads;

    form.parse(req, function ee(err, _fields, files) {
        if (err) {
            logMessage(err);
        }
        try {
            let file = files.file.path;
            logMessage(file);

            setTimeout(function yz() {
                fs.unlink(file, function zy(err) {
                    if (err) {
                        logMessage(err);
                    }
                    else {
                        logMessage(file + ' deleted');
                    }
                });
            }, 60000);

            let fileName = files.file.name;
            req.session.file = file;
            resp.writeHead(200, {'content-type': 'text/html'});
            resp.end('<html><body><script>parent.amorphic.prepareFileUpload(\'package\');' +
                'parent.amorphic.uploadFunction.call(null, "' +  fileName + '"' + ')</script></body></html>');
            statsdUtils.computeTimingAndSend(
                processFileTime,
                'amorphic.webserver.process_file.response_time',
                { result: 'success' });
        } catch (err) {
            resp.writeHead(400, {'Content-Type': 'text/plain'});
            resp.end('Invalid request parameters');
            logMessage(err);
            statsdUtils.computeTimingAndSend(
                processFileTime,
                'amorphic.webserver.process_file.response_time',
                { result: 'Invalid request parameters, file or path params cannot be blank' }
            );
        }
    });
}

module.exports = {
    processFile: processFile
};
