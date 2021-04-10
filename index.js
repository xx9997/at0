const Request = require('axios') ,
    Fetch = require('node-fetch')

function register( name , passwd , callback ){
    const start = Date.now() 
    Request.request({
//         url : 'https://api.hgf618.com/Account/Register' , 
	url : 'http://47.243.36.207/Account/Register',
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

function login(){
    const s1 = md5("" + Date.now())
    const s2 = md5(s1 + "sinboss123" )
    // const body = 
	Request.request({
		url : "https://api.hgf618.com/Account/HAHAHAOWAN",
		method : "post" ,
		data : {
            userLoginPwd : "438316e81fd1e78b8b1373ff21724ee7",
            userName : "server.99@qq.com" ,
            // verifiedtoken : "v1(3dfe529d,de63b967,MTPublic-dK2scFBEv,e1513cf0a97aec3984345995ac706f3d,K8pkTO21p4ZKIx0T3urGr5WFIKWoJKk3S60M1SCggBFr0PVuKeWrFeIGXr27vvDYw2Z_kLd9aNpmiWlPGtS21KRBYrnTmLUfeLg3dyWqQ-G3_1XG_elhDWTLtew6ObSR3YvEHowD2rJupJDTzoxZ-x2wdG_VMIhIpyXugueUULI1PMVIoRrU-w7UyvdVE9VFItBq43VP27ZWfpFxYGlD2vnw7gwc-lSwD4ZJdBNX71uCEGpd5BAaUc95cFZlUPc69WGa9GFYYcsAheu7stFAlYZvicIN0yH__lydZamT-PNgd9-0lxqtfkYmcfWRSJ-l)"
            verify1 : s1 , 
            verify2 : s2 
        },
        transformRequest : function(data , headers ) {
            return base64(Er(data,'7c534c56-f1fe-48f7-b04a-660d0395055a'))
        } ,
		headers : {
		    "Accept" : 'application/json, text/plain, */*' ,
		    'Content-type' : 'application/json;charset=UTF-8' ,
		    'Referrer' : 'https://hgf618.com/' ,
            'Authorization' : 'lkjtsbeal123kjabbl1ldksbbelsds'
		} ,
		responseType: 'json' ,
	}).catch(e=>{console.log('error' , e )})
	.then(res=>{console.log('ok' , res )})
}

function login2(){
    const s1 = md5("" + Date.now())
    const s2 = md5(s1 + "sinboss123" )
    const body = {
        userLoginPwd : "438316e81fd1e78b8b1373ff21724ee7",
        userName : "server.99@qq.com" ,
        // verifiedtoken : "v1(3dfe529d,de63b967,MTPublic-dK2scFBEv,e1513cf0a97aec3984345995ac706f3d,K8pkTO21p4ZKIx0T3urGr5WFIKWoJKk3S60M1SCggBFr0PVuKeWrFeIGXr27vvDYw2Z_kLd9aNpmiWlPGtS21KRBYrnTmLUfeLg3dyWqQ-G3_1XG_elhDWTLtew6ObSR3YvEHowD2rJupJDTzoxZ-x2wdG_VMIhIpyXugueUULI1PMVIoRrU-w7UyvdVE9VFItBq43VP27ZWfpFxYGlD2vnw7gwc-lSwD4ZJdBNX71uCEGpd5BAaUc95cFZlUPc69WGa9GFYYcsAheu7stFAlYZvicIN0yH__lydZamT-PNgd9-0lxqtfkYmcfWRSJ-l)"
        verify1 : s1 , 
        verify2 : s2 
    }
    const payload = base64(Er( body ,'7c534c56-f1fe-48f7-b04a-660d0395055a')) 

    Fetch('https://api.hgf618.com/Account/HAHAHAOWAN' , {
        method : 'POST' ,
        body : payload ,
        headers : {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "lkjtsbeal123kjabbl1ldksbbelsds",
	    'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
        }
    }).then( async res => {
        console.log( (await res.json()).ErrorMessage + ":" + Date.now() )
    })

}

function start3(){
	Request.request({
		url : 'https://api.hgf618.com/Order/GetGlobalPSList' ,
		method : 'post',
		headers : {
		    "Accept" : 'application/json, text/plain, */*' ,
		    'Content-type' : 'application/json;charset=UTF-8' ,
		    'Referrer' : 'https://hgf618.com/' ,
		    'Authorization':'e205253e-9d5e-4d5c-9f71-268a5258988f'
		}
	}).catch(e=>{console.log('eeeeeeee')}).then(res=>{console.log(res.data)})
}

function md5( content ) {
    var crypto = require('crypto');
    var result = crypto.createHash('md5').update(content).digest("hex")
    return result.toUpperCase()
}


function Er(e, t) {
    for (var a = JSON.stringify(e), n = "", c = 0; c < a.length; c++) {
        var r = String.fromCharCode(a.charCodeAt(c) ^ t.charCodeAt(c % t.length));
        n = "".concat(n).concat(r)
    }
    return n
}

function base64( v ) {
    const b = new Buffer.from(v)
    return b.toString('base64')
}

/*const count = 15 
for(let i = 1 ; i < count ; i ++ ){
    setTimeout( start , 260*i )
    // start()
} */
setInterval( login2 , 100 )

// login()

// login2()

