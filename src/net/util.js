/**
 * Created by seedinwind on 18/12/16.
 */

import 'whatwg-fetch'
import 'es6-promise'
export function get(url) {
    let result = fetch(url, {
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json, text/plain, */*'
        },
        // 设置允许cors跨域
        mode: 'cors',
        method:"GET"
    });
    return result;
}

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

// 发送 post 请求
export function postJson(url, paramsObj) {
    let result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(paramsObj)
    });

    return result;
}