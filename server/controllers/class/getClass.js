const { like_classes } = require('../../models');

module.exports = {
    myClass: async (req, res) => {
        const userId = req.params;
        console.log('getClass/myClass like_classes 테이블이 있는거 맞아? ===', like_classes )
        console.log('getClass/myClass userId=====', userId)

        // 쿼리파라미터로 요청 받은 유저 아이디값을 가진 like_class들을 찾는다
        const userLikes = await like_classes.findAll({where : { userId }})
        console.log('getClass/myClass userLikes=====', userLikes)
        // userLikes가 배열로 나오려나?

        // 해당 유저의 likeclass들을 배열로 보내준다
        res.status(200).send('');
    },
    oneClass: (req, res) => {
        res.end();
    },
    typeClass: (req, res) => {
        res.end();
    },
    categoryClass: (req, res) => {
        res.end();
    }
}