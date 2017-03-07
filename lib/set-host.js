/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/12/30
 */
'use strict';
/**
 *
 * @param name
 * @param age
 */
var fs = require('fs-extra');
var hostile = require('hostile');

var str = fs.readFileSync('../host-port.md');

hostile.set('127.0.0.1', 'oa.dev.neixin.cn', function(err){
    if (err) {
        console.error(err)
    } else {
        console.log('set /etc/hosts successfully!')
    }
});

console.log(str.toString());