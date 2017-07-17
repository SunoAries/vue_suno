import  article from './MD/data.js'


/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}



const articless = () =>setpromise(article);


/**
 * 以下Api接口不需要进行反向代理
 */


export {articless};
