const { User } = require('../../models');

module.exports = {
    validateLoginId: async (req, res) => {
         try {
           
            const { login_id } = req.body

            // 아무것도 입력되지 않은 경우
            if(!login_id) res.sendStatus(400);

            // DB에 이미 있는 로그인 아이디 인지 찾는다
            const db_loginId = await User.findOne({ where : { login_id } });

            // 이미 존재하는 아이디인 경우
            if(db_loginId) res.status(409).send(`The ${login_id} already exists.`);

            // 존재하지 않는 아이디인 경우(입력한 아이디를 사용해도 되는 경우)
            res.sendStatus(200);

         } catch (err) {
             console.log(err)
         }
    },
    validateNickname: async (req, res) => {
      try {
        console.log('닉네임???',req.body)
        const { nickname } = req.body
        
        if(!nickname) res.sendStatus(400);

        // DB에 이미 있는 닉네임 인지 찾는다
        const db_nickname = await User.findOne({ where : { nickname } });

        // 이미 존재하는 닉네임인 경우
        if(db_nickname) res.status(409).send(`The ${nickname} already exists.`);

        // 존재하지 않는 닉네임인 경우(입력한 닉네임을 사용해도 되는 경우)
        res.sendStatus(200);
        return;
      } catch (err) {
        console.log(err);
      }

    }
}