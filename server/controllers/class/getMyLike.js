const { User } = require('../../models');
const { Class_like } = require('../../models');

module.exports = {
    getMyLike : async (req, res) => {
        try {
            const { userId } = req.params;
            console.log('userIdsssssssssssss', userId);
            console.log('Class_likeClass_like', Class_like)

            return;
            return res.status(200).send('');

        } catch (err) {
            console.log(err);
            throw err;
        }
    },
}