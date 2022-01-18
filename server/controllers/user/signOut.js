module.exports = {
    signOut: (req, res) => {
        try {
            // refreshToken 재정의 통해 쿠키 삭제
            res.cookie('refreshToken', '', {
                sameSite: 'Strict',
                secure: true,
                httpOnly: true,
                expires: new Date(Date.now() - 10000) // 지금으로부터 1분 전
            });
            
            return res.sendStatus(205);
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
}