const { User } = require('../../models');
const { like_classes } = require('../../models');

module.exports = {
    like: async (req, res) => {
        try {
            const { userId, classId } = req.body;
            // ??? userId나 clasId가 없는 경우 에러핸들링하기
            const addedClass = await like_classes.create({
                userId,
                classId
            })

            console.log('addedClass????', addedClass)
            return res.status(200).send(addedClass.classId);

        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    unlike: async (req, res) => {
        try {
            const { userId, classId } = req.body;
            // ??? userId나 clasId가 없는 경우 에러핸들링하기
            const deletedClass = await like_classes.destory({
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