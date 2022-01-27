require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
    generateAccessToken: (data) => {
      return sign(data, process.env.ACCESS_SECRET, { expiresIn: '1d' })
    },
    generateRefreshToken: (data) => {
      return sign(data, process.env.REFRESH_SECRET, { expiresIn: '2d' })
    },
    sendAccessToken: (res, accessToken, userInfo) => {
      return res.status(201).send({ accessToken , userInfo });
    },
    sendRefreshToken: async (res, refreshToken) => {
      console.log('refreshToken??????????', refreshToken)
      res.cookie('refreshToken', refreshToken, {
        sameSite: 'None', // 전송되는 쿠키에 대한 제한을 제거하기 위해 None 값을 도입
        secure: true,
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 48) 
      });
    },
    isAuthorized: async (req) => {
      const authorization = await req.headers['authorization'];
      console.log('tokenFunction/authorization????', authorization);

      // accessToken이 해더에 없는 경우
      if(!authorization) return null;

      const accessToken = authorization.split(' ')[1];
      console.log('tokenFunction/accessToken????', accessToken);

      try {
          return verify(accessToken, process.env.ACCESS_SECRET);
      } catch (err) {
          // accessToken이 유효하지 않을 경우  
          return null;
      }

    },
    checkRefreshToken: (refreshToken) => {
      try {
        return verify(refreshToken, process.env.REFRESH_SECRET);
      } catch (err) {
        return null;
      }
    }
}