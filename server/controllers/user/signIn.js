const { User } = require('../../models');
const bcrypt = require('bcrypt');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions')

module.exports = {
    signIn:  async (req, res) => {
        /**
         * 해당 아이디와 유저를 찾는다
         * 아이디 불일치시  => 401 응답
         * 해당 아이디의 비밀번호를 복호화한다 (bcrypt) 
         * 비밀번호 불일치시  => 401 응답
         * 비밀번호 일치시
         * jwt 토큰을 쿠키로 전달한다
         * 201 유저네임, login_id, nickname, profile_path, is_teacher을 보낸다
        **/
        try {
            const { login_id, password } = req.body.loginData;
            console.log('req.body.loginData---??', req.body.loginData)
    
            const db_user = await User.findOne({ where: { login_id } });
    
            if(!db_user) {
                return res.status(401).send('The login_id does not exist.');
            }
    
            bcrypt.compare(password, db_user.password, async (err, result) => {
              if(err) throw err
              if(!result) {
                return res.status(401).send('The password is wrong.');
              }
             
              delete db_user.dataValues.password;
              console.log('db_user.dataValues.', db_user.dataValues);

              const accessToken = await generateAccessToken(db_user.dataValues);
              await sendAccessToken(res, accessToken);
              return res.status(201).send({ userInfo: db_user.dataValues });
            });

        } catch (err) {
            console.log(err);
            throw err;
        }

    },
}