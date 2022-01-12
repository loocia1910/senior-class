require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
    generateAccessToken: (data) => {
      return sign(data, process.env.ACCESS_SECRET, { expiresIn: '2d' })
    },
    sendAccessToken: (res, accessToken) => {
      res.cookie('jwt', accessToken, {
          httpOnly: true, // 자바스크립트에서 쿠키 접근 불가
          sameSite: 'Strict', // cross-origin이 아닌 same-site인 경우에만 쿠키를 전송할 수 있음
          secure:true, // https 프로토콜 통신하는 경우에만 쿠키전송 가능
          expires: new Date(Date.now() + 1000 * 60 * 60 * 48) // 지금으로부터 2일 후
      });
    },
    isAuthorized: (req) => {
      const jwt = req.cookies.jwt;
      console.log('tokenFunction/index isAuthorized jwt: -----> ',jwt)
      if(!jwt) return null;
      try {
          return verify(jwt, process.env.ACCESS_SECRET);
      } catch (err) {
          // 토큰이 유효하지 않을 경우  
          return null;
      }

    }
}