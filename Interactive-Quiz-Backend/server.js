'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);







/*  Function for % based
 *  Tracks how many questions for each role
 *  Each question adds points to a role in the database/notepad (Locally?)
 *  Totals score for each role
 *  Find the percentage of each
 *  Returns the role with the greatest percentage
 */

/* Function for point based
 * Each question adds points to a/all role(s) in a database/notepad (Locally?)
 * Totals score for each role
 * Returns the role with the greatest total points
 */