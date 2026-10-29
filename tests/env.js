// Where the tests find Playwright and the built prototype
let pw; try { pw = require('playwright'); } catch (e) { pw = require('/opt/node-tools/node_modules/playwright'); }
const path = require('path');
exports.chromium = pw.chromium;
exports.PAGE = 'file://' + path.resolve(__dirname, '../dist/create-resume-prototype.html');
exports.FIXTURES = path.resolve(__dirname, 'fixtures') + '/';
