const { User } = require('../../models');
const { Class } = require('../../models');
const { Class_like } = require('../../models');

module.exports = {
    like: async (req, res) => {
        try {
            const { userId, classId } = req.body;

            // 요청받은 userId나 clasId가 없는 경우
            const db_user = await User.findByPk(userId);
            const db_class = await Class.findByPk(classId);
            if(!db_user || !db_class) {
                return res.status(422).send('The userId or classId does not exist.')
            }

            const addedClass = await Class_like.findOrCreate({
             where:{ userId, classId }
            });

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

            // 해당 유저의 like 리스트를 보내준다.
            return res.status(200).send({ myLikes });

        } catch (err) {
            throw err;
        }
    },
    unlike: async (req, res) => {
        try {
            const { userId, classId } = req.body;

            // 요청받은 userId나 clasId가 없는 경우
            const db_user = await User.findByPk(userId);
            const db_class = await Class.findByPk(classId);
            if(!db_user || !db_class) {
                return res.status(422).send('The userId or classId does not exist.')
            };

            const deletedClass = await Class_like.destroy({
                where: {
                    userId,
                    classId
                }
            });

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
            });

            return res.status(200).send({ myLikes });

        } catch (err) {
            throw err;
        }
    },
}