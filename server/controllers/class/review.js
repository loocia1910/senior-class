const { Review }  = require('../../models');
const { User }  = require('../../models');
const { Class }  = require('../../models');

module.exports = {
    // 특정 클래스의 리뷰
    getAllReview: async (req, res) => {
        try {
            const { classId } = req.params;
            console.log('서버클래스 아이디', classId)
            const classReviews = await Review.findAll({ 
                include: [{
                    model: User,
                    attributes: ['id', 'login_id', 'profile_url']
                }],
                where: { classId } 
            });
            return res.status(200).send({ classReviews });
        } catch (err) {
            throw err;
        }
    },
    // 마이페이지에 리뷰
    getMyReview: async (req, res) => {
        try {
            const { userId } = req.params;
            // return;
            const myReview = await Review.findAll({
                include: [{
                    model: Class,
                    attributes: [ 'id', 'name', 'img_url' ]
                }],
                where: { userId }
            });
            console.log('서버에 myReview---', myReview);
            res.status(200).send({ myReview });
        } catch (err) {
            throw err;
        }
    },
}