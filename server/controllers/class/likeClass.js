const { User } = require('../../models');
const { Class_like } = require('../../models');

module.exports = {
    like: async (req, res) => {
        try {
            console.log('7777777', req.body)
            console.log('Class_like????', Class_like);


            return;
            const { userId, classId } = req.body;
            // ??? userId나 clasId가 없는 경우 에러핸들링하기
            const addedClass = await Class_like.create({
                userId,
                classId
            })

            // 해당 유저의 like 리스트를 보내준다.
            return res.status(200).send({ myLikes });

        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    unlike: async (req, res) => {
        try {
            const { userId, classId } = req.body;
            // ??? userId나 clasId가 없는 경우 에러핸들링하기
            const deletedClass = await Class_like.destory({
                where: {
                    userId,
                    classId
                }
            });

            const myClass = await like_classes.findAll({
                where: {
                    userId,
                    classId
                }
            });

            console.log('deletedClass????', deletedClass)
            console.log('myClass.defaultValue???? 지워졌는지 확인하기', myClass.defaultValue)
            return res.status(200).send(classId);

        } catch (err) {
            console.log(err);
            throw err;
        }
    },
}