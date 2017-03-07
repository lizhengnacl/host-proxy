/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/12/30
 */
'use strict';
let fs = require('fs');

function parseFile(fileName, config={}){
    let result = {};
    config = Object.assign({
        enter: '\n'
    }, config);
    let str = fs.readFileSync(fileName).toString();
    let hosts = str.replace(/#.*/g, '').split(config.enter);
    let reg = /(.+)\s+(.+)\s+(.+)\s*/;
    for(let i = 0; i < hosts.length; i ++){
        let host = hosts[i];
        if(host !== ''){
            let fregs = reg.exec(host);
            if(fregs){
                result[fregs[2]] = fregs.slice(1);
            }
        }
    }
    return result;
}

module.exports = parseFile;