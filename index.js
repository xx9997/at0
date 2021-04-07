const Request = require('axios')

function register( name , passwd , callback ){
    const start = Date.now() 
    Request.request({
        url : 'https://api.hgf618.com/Account/Register' , 
        method : "post" ,
        data : {
            "userEmail" : name , 
            "userLoginPwd" : passwd 
        } ,
        headers : {
            "Accept" : 'application/json, text/plain, */*' ,
            'Content-type' : 'application/json;charset=UTF-8' ,
            'Referrer' : 'https://hgf618.com/' ,
        } ,
        responseType: 'json' ,
    }).catch( e => {
        console.log(`Execute error.` , e )
        callback()
    }).then( response => {
        const end = Date.now()
        console.log( `Result:${response.data.ErrorMessage} , ${end-start} ms `  )
        callback()
    })
}

function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

function start(){
    const name = randomString(12) + "@gmail.com"
    const passwd = randomString(10) + "%^"
    register( name , passwd , start ) 
}

for(let i = 1 ; i < 20 ; i ++ ){
    setTimeout( start , 200*i )
    // start()
}
