module.exports = {
    classDetail: require('./getClassDetail').classDetail,
    typeClass: require('./getTypeClass').typeClass,
    like: require('./likeClass').like,
    unlike: require('./likeClass').unlike,
    getMyLike: require('./getMyLike').getMyLike,
    postReview: require('./review').postReview,
    putReview: require('./review').putReview,
    deleteReview: require('./review').deleteReview,
    getAllReview: require('./review').getAllReview,
}