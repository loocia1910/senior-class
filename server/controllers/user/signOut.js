const { isAuthorized } = require('../tokenFunctions')

module.exports = {
    signOut: (req, res) => {
        try {
            // 쿠키에 삭제해줌
            res.clearCookie('jwt', {
               sameSite: 'Strict',
               secure: true,
               httpOnly: true
            })

            res.sendStatus(200)

        } catch (err) {
            console.log(err);
            throw err;
        }
    },
}