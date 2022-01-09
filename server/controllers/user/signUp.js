const { User } = require('../../models');


module.exports = {
    signUp: async (req, res) => {
        /**
        * 1. body 값에서 login_id, password, nickname, name, birth, gender 값 구조분해 할당.
        * // 성공할 경우
        * 2. 비밀번호를 bcrypt로 hash화 한다.
        * 3. hash와 유저 정보를 DB에 저장
        **/
        try {
          console.log('req.body--------', req.body)
          const { login_id, password, nickname, name, birth, gender } = req.body;
        
          // 이미 존재하는 닉네임인 경우
          const db_nickname = await User.findOne({ where : { nickname } });
          if(db_nickname) return res.status(409).send(`The ${nickname} already exists.`);

          // 인풋 창이 모두 입력되지 않은 경우
          if( !login_id || !password || !nickname || !name || !birth || !gender) {
              return res.status(422).send('All inputs need to be fully filled.');
          }

          // 회원가입 승인
          // 비밀번호 bcrypt로 해쉬화 하기 
          bcrypt.hash(password, 10, async (err, hash) => {
            if (err) return console.log('signup bcrypt hash 생성 오류 :', err);
            
            // DB에 hash된 비밀번호를 포함 새로운 유저 정보 저장
            // ====> ??? admin과 info 필드는 처음에 값을 안 주었는데 넣어줘야하나?
            const new_user = await User.create({
              login_id,
              password: hash,
              nick_name,
              name,
              birth,
              gender,
            }, { fields: ['login_id', 'password', 'nickname', 'name', 'birth', 'gender'] });

          });

          return res.sendStatus(201);

        } catch (err) {
          console.log(err);
        }
    },
}