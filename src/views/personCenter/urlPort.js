import request from '@/common/request';

// 模拟个接口
const loginService = {
    login(arg) {
       return request.post('/users', arg);
    },
    getUser(arg) {
       return request.post('/getUsers', arg)
    }
}

export default loginService;