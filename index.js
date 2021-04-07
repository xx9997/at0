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
        const end = Date.now()
        try{
            console.log(`Execute error. ${e.response.data} ${end-start} ms`  )	
        } catch(ee) {
            console.log(`Execute error. ${end-start} ms`  )	
        }
	    setTimeout( callback , 469 )
    }).then( response => {
        const end = Date.now()
	//	console.log( response ) 
        try{
            if( response && response.data ) {
                    console.log( `Result:${response.data.ErrorMessage} , ${end-start} ms `  )
            } else {
        //		console.log( response ) 
            }
        }catch(e) {
            console.log(`Execute error in callback. , ${end-start} ms `)
        }
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

const count = 15 
for(let i = 1 ; i < count ; i ++ ){
    setTimeout( start , 260*i )
    // start()
}
