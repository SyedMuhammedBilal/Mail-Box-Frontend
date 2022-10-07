const requireLogin = async () => {
    const token = localStorage.getItem("token");
    return new Promise((resolve, _reject) => {
        (async () => {
            let pathname;

            try {
                if (token) {
                    pathname = '/emails'
                    resolve(pathname)
                } else {
                    pathname = '/'
                    resolve(pathname)
                }
            } catch (error) {
                console.log('require-login-error', error)
                return resolve({})
            }
        })()
    })
}

export default requireLogin