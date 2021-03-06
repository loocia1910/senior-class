const { User } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = {
    withdrawal: async (req, res) => {
        try {
        // isAthorized? accesstoken으로 확인
        // DB에서 로그인 아이디를 찾기
        // 일치 유저 삭제
        const userData = await isAuthorized(req);
        console.log('userData-----회원탈퇴', userData)
        // return;
        if(!userData.login_id) return res.status(401).send('The accessToken is invaild.');
        
        // 해당 유저를 삭제
        await User.destroy({ where: {id: userData.id} });
        // refreshToken을 삭제
        res.cookie('refreshToken', '', {
            sameSite: 'Strict',
            secure: true,
            httpOnly: true,
            expires: new Date(Date.now() - 10000) // 지금으로부터 1분 전
        });

        res.status(200).send('The user has been deleted.')
            
        } catch (err) {
            throw err;
        }
    },
}