const { User } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');
const bcrypt = require('bcrypt');

module.exports = {
    auth: async (req, res) => {
        try {
            const Authorization = isAuthorized(req);
            if(!Authorization) return res.status(401).send('The accessToken is invaild.');

            const { login_id, password  } = req.body

            const db_user = await User.findOne({ where: { login_id } });
            if(!db_user) {
                return res.status(401).send('The login_id does not exist.');
            }
    
            bcrypt.compare(password, db_user.password, async (err, result) => {
                    if(err) {
                        throw err
                    }
                    if(!result) {
                      return res.status(401).send('The password is wrong.');
                    }
                    
                    return res.status(200).send('isAuthorized.');
            });
            return;
        } catch (err) {
            throw err;
        }
        res.end();
    },
}