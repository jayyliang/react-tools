import http from './axios-config'
let api = {
    async login(account, password) {
        let data = {
            account: account,
            password: password
        }
        return new Promise((resolve, reject) => {
            http.post('/react-admin/public/admin/login', data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
export default api