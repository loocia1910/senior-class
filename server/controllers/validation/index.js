const { user } = require('../../models');

module.exports = {
    validateLoginId: async (res, end) => {
         try {
            const { login_id } = res.body
            
            // DB에 이미 있는 로그인 아이디 인지 찾는다
            const db_loginId = await user.findOne({ where : { login_id } });

            // 이미 존재하는 아이디인 경우
            if(db_loginId) return res.status(409).send(`The ${login_id} already exists.`);
            else {
              // 존재하지 않는 아이디인 경우(입력한 아이디를 사용해도 되는 경우)
              return res.sendStatus(200);
            }

         } catch (err) {
             console.log(err)
         }
    },
    validateNickname: async (res, end) => {
        try { 
            const { nickname } = res.body
            
            // DB에 이미 있는 닉네임 인지 찾는다
            const db_nickname = await user.findOne({ where : { nickname } });

            // 이미 존재하는 닉네임인 경우
            if(db_nickname) return res.status(409).send(`The ${nickname} already exists.`);
            else {
              // 존재하지 않는 닉네임인 경우(입력한 닉네임을 사용해도 되는 경우)
              return res.sendStatus(200);
            }

         } catch (err) {
             console.log(err)
         }
    }
}