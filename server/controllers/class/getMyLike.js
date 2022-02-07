const { Class } = require('../../models');
const { User } = require('../../models');
const { Class_like } = require('../../models');

module.exports = {
    getMyLike : async (req, res) => {
        try {


            const { loginId } = req.params;
          
            const db_user = await User.findOne({ 
                where: { login_id: loginId },
                attributes: ['id'] 
            })
            const userId = db_user.dataValues.id;

            const myLikes = await Class_like.findAll({
                include: [{
                    model: Class,
                    attributes: ['id', 'name', 'price', 'discount', 'region', 'img_url'],
                    include: [{
                        model: User,
                        attributes: ['id', 'name']
                    }]
                }],
                where: { userId }
            })

            console.log('getmylikes myLikes', myLikes )

            return res.status(200).send({ myLikes });

        } catch (err) {
            console.log(err);
            throw err;
        }
    },
}