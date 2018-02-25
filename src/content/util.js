// 千分位添加逗号
export const toThousands = (number) => {
    let minus = false;
    number = (number || 0).toString();
    number.indexOf('-') === 0 && (number = number.substring(1)) && (minus = true);
    let num = number.split('.')[0],
        decimals = (number || 0).toString().split('.')[1],
        result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result
        num = num.slice(0, num.length - 3)
    }
    if (num) {
        result = num + result
    }
    return (minus ? '-' : '') + result + (decimals ? `.${decimals}` : '');
};

// 计算某个结束日期与当前日期的时间差（精度为分钟）
export const timeDiff = (endDate, startDate) => {
    if (endDate && endDate !== -1) {
        let date = endDate - (startDate || new Date().getTime())
        if (date < 0) return `00天00小时00分`
        let days = Math.floor(date / (24 * 3600 * 1000))

        let leave1 = date % (24 * 3600 * 1000),
            hours = Math.floor(leave1 / (3600 * 1000))

        let leave2 = leave1 % (3600 * 1000),
            minutes = Math.floor(leave2 / (60 * 1000))

        let leave3 = leave2 % (60 * 1000),
            seconds = Math.round(leave3 / 1000)

        return `${days}天${hours}小时${minutes}分`
    } else {
        return `00天00小时00分`
    }
}

/**
 * 根据format格式转换时间
 * @param date 绝对时间
 * @param format 转换格式,例如 'yyyy-MM-dd hh:ss'
 * @returns {string|void|XML|*}
 */
export const formatDate = (date, format) => {
    if (!date) {
        return '';
    }

    date = parseInt(date);

    date = new Date(date);

    var map = {
        'M': date.getMonth() + 1, //月份
        'd': date.getDate(), //日
        'h': date.getHours(), //小时
        'm': date.getMinutes(), //分
        's': date.getSeconds(), //秒
        'q': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds() //毫秒
    };
    format = format.replace(/(y+|M+|d+|h+|m+|s+|q+|S+)/g, function (all, t) {
        t = t.charAt(0);
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        }
        else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
};

export const toChNumber = (num) => {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(num)) return '数据非法';
    var unit = '京亿万仟佰拾兆万仟佰拾亿仟佰拾万仟佰拾元角分', str = '';
    num += '00';
    var p = num.indexOf('.');
    if (p >= 0)
        num = num.substring(0, p) + num.substr(p + 1, 2);
    unit = unit.substr(unit.length - num.length);
    for (var i = 0; i < num.length; i++) str += '零壹贰叁肆伍陆柒捌玖'.charAt(num.charAt(i)) + unit.charAt(i);
    return str.replace(/零(仟|佰|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/零(兆|万|亿|元)/g, '$1').replace(/(兆|亿)万/g, '$1').replace(/(京|兆)亿/g, '$1').replace(/(京)兆/g, '$1').replace(/(京|兆|亿|仟|佰|拾)(万?)(.)仟/g, '$1$2零$3仟').replace(/^元零?|零分/g, '').replace(/(元|角)$/g, '$1整');
};

/**
 * 获取queryString中的参数
 * @param name 参数名
 * @param queryString
 * @returns {string}
 */
export const getQueryParam = (name, queryString) => {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const r = queryString.substr(1).match(reg);
    if (r !== null) {
        return unescape(r[2]);
    }
    return null;
};

//验证身份证格式
export const validateIdCard = (idCard) => {
    //15位和18位身份证号码的正则表达式  
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    //如果通过该验证，说明身份证格式正确，但准确性还需计算  
    if (regIdCard.test(idCard)) {
        if (idCard.length == 18) {
            var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里  
            var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组  
            var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和  
            for (var i = 0; i < 17; i++) {
                idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
            }
            var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置  
            var idCardLast = idCard.substring(17);//得到最后一位身份证号码  
            //如果等于2，则说明校验码是10，身份证号码最后一位应该是X  
            if (idCardMod == 2) {
                if (idCardLast == 'X' || idCardLast == 'x') {
                    return true;
                    //alert('恭喜通过验证啦！');  
                } else {
                    return false;
                    //alert('身份证号码错误！');  
                }
            } else {
                //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码  
                if (idCardLast == idCardY[idCardMod]) {
                    //alert('恭喜通过验证啦！');  
                    return true;
                } else {
                    return false;
                    //alert('身份证号码错误！');  
                }
            }
        }
    } else {
        //alert('身份证格式不正确!');  
        return false;
    }
}

// 检验社会信用代码格式
export const validateOrgCard = (value) => {
    let reg = /[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}/g
    return reg.test(value) === false ? false : true
}