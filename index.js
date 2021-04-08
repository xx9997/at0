const Request = require('axios')

function register( name , passwd , callback ){
    const start = Date.now() 
    Request.request({
//         url : 'https://api.hgf618.com/Account/Register' , 
	url : 'http://47.243.36.207Account/Register',
        method : "get" ,
        data : {
	    "ipAddress" : randomIp() ,
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
        const value = end - start 
        try{
            console.log(`Execute error. ${e.response.data} ${value} ms`  )	
        } catch(ee) {
            console.log(`Execute error. ${value} ms`  )	
        }
	    setTimeout( callback , 25000-value )
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

function randomIp(){
    function num(){
        return Math.floor(Math.random()*254) 
    }
    return `${num()}.${num()}.${num()}.${num()}`
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
    register( name , passwd , ()=>{} ) 
}

function start2() {
	Request.get('http://47.243.36.207/account/Register').then( r => {
		console.log(r.data)
	}).catch(e=>{console.log('error...')})
}

/*const count = 15 
for(let i = 1 ; i < count ; i ++ ){
    setTimeout( start , 260*i )
    // start()
} */
setInterval( start2 , 5 )
