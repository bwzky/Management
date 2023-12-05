/**
 *
 */
import Cookies from "js-cookie";

// 设置存储库cookie的名字
var Type= "token"
// 存储token
function setToken(values){
	Cookies.set(Type,values,{expires:1})
}
// 获取token
function getToken(){
	return Cookies.get(Type)
}
// 移除token
function removeYoken(){
	Cookies.remove(Type)
}

export {
	setToken,
	getToken,
	removeYoken
}
