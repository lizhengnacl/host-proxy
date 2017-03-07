/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/12/29
 */
'use strict';

var fs = require('fs-extra');

var profile = fs.readFileSync('/private/etc/hosts');

profile += '\n127.0.0.1 oa.dev.neixin.cn';
fs.outputFileSync('/private/etc/hosts', profile, 'utf8');

console.log(profile.toString());