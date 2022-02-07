const { User } = require('../../models');
const bcrypt = require('bcrypt');

module.exports = {
    modify: async (req, res) => {
        try {
            const { login_id, nickname, password } = req.body;

            const db_user = await User.findOne({ where: { login_id } });

            if(!db_user) {
                return res.status(401).send('The login_id does not exist.');
            }
         
            if(nickname === '' && password === '') {
                return res.status(422).send('Please submit some infomation you want to change.');
            }
            // 닉네임 변경
            if(nickname) {
                await db_user.update({ nickname });
                await db_user.save();
            }

            // 비밀번호 변경
            if(password) {
                bcrypt.hash(password, 10, async (err, hash) => {
                    if(err) { throw err }
                        await db_user.update({ password: hash });
                        await db_user.save();
                    });
            }

                
            return res.status(200).send({ nickname: db_user.dataValues.nickname });                

        } catch (err) {
            throw err;
        }
    },
}