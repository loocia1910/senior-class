const { User } = require('../../models');
const { 
        checkRefreshToken,
        generateRefreshToken,
        generateAccessToken,
        sendRefreshToken,
        sendAccessToken,
    } = require('../tokenFunctions')

module.exports = {
    silentRefresh:  async (req, res) => {
        /**
         * 쿠키에 있는 refresh token이 있거나 유효한지 확인
         * refresh token이 없는 경우 => 401 응답
         * refresh token이 있는 경우
         *    - refresh token 재발급 및 쿠키로 전달
         *    - access token 재발급 및 응답바디로 전달
        **/
        try {
            const refreshToken = req.cookies.refreshToken;
            console.log('silentRefresh/refreshToken===', refreshToken)

            if(!refreshToken) {
                return res.status(401).send('The refresh token does not exist.');
            }
            
            const refreshTokenData = await checkRefreshToken(refreshToken);
            if(!refreshTokenData) {
                return res.status(401).send('The refresh token is invalid.');
            }
            
            const { login_id } = refreshTokenData;
            const db_user = await User.findOne({ where: { login_id } });

            if(!db_user) {
                return res.status(401).send('The refresh token is invalid.');
            }
            
            delete db_user.dataValues.password;

            const newRefreshToken = await generateRefreshToken(db_user.dataValues);
            const newAccessToken = await generateAccessToken(db_user.dataValues);

            sendRefreshToken(res, newRefreshToken);
            sendAccessToken(res, newAccessToken, db_user.dataValues)
        } catch (err) {
            console.log(err);
            throw err;
        }

    },
}