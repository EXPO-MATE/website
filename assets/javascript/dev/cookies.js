chooseCookie();

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

function chooseCookie(){
    var userLang = navigator.language || navigator.userLanguage;
    var activeCookie = getCookie('lang');
    var queryParam = getParameterByName('lang');
    if(activeCookie === undefined || activeCookie === null || activeCookie === ''){
        if(userLang.match(/de/g)){
            setCookie('lang','de',7);
        } else if (userLang.match(/en/g)){
            setCookie('lang','en',7);
        } else if (userLang.match(/nl/g)) {
            setCookie('lang','nl',7);
        } else {
            setCookie('lang','nl',7);
        }

        setTimeout(function(){
            window.location.reload();
        },20);
    } else {
        $('body').addClass(activeCookie);
    }

    if (queryParam !== undefined && queryParam === 'de'){
        setCookie('lang','de',7);
    }

    setTimeout(function(){
        $('#nav .active-loc').html(getCookie('lang'));
    },200);
    
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
