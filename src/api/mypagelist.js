import jsonp from '../commonjs/jsonp.js'

import { commonPayLoad, options, ERR_ok } from "./config.js";

export const getMyPageList = () => {
    //my_page_list URL
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    const data = Object.assign({}, commonPayLoad, {
        uin: 0
    })
    return jsonp(url, data, options);
}

export const getMusicHallList = () => {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';

    const data = Object.assign({}, commonPayLoad, {
        uin: 0
    })
    return jsonp(url, data, options);
}