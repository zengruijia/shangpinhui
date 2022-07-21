import { v4 as uuidv4 } from 'uuid';
//要生成一个随机字符串,且每次执行不能发生变化，游客身份持久储存
export const getUUID = () => {
	//先判断本地存储中是否有token
	let uuid_token = localStorage.getItem('UUIDTOKEN');
	if (!uuid_token) {
		uuid_token = uuidv4();
		localStorage.setItem('UUIDTOKEN', uuid_token);
	} else {
		return uuid_token;
	}
};
