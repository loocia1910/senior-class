const { Router } = require('express');
const router = Router();
const userCtrl = require('./user');
const teacherCtrl = require('./teacher');
const classCtrl = require('./class');
const generalMypageCtrl = require('./generalMypage');
const validationCtrl = require('./validation');

// user
router.post('/signin', userCtrl.signIn);
router.delete('/signout', userCtrl.signOut);
router.post('/signup', userCtrl.signUp);
router.delete('/withdrawal', userCtrl.withdrawal); // 회원탈퇴
router.get('/silentRefresh', userCtrl.silentRefresh);
router.get('/auth/google', userCtrl.googleLogin);
router.get('/auth/googleCallback', userCtrl.googleLogin);
router.get('/auth/kakao', userCtrl.kakaoLogin);
router.get('/auth/kakoCallback', userCtrl.kakaoLogin);

// teacher
router.post('/teacher/apply', teacherCtrl.teacherApply);

// class
// 클래스 불러오기
router.get('/product/:classId', classCtrl.classDetail);
router.get('/class/:type', classCtrl.typeClass);

// 클래스 찜
router.post('/class/like', classCtrl.like);
router.post('/class/unlike', classCtrl.unlike);
router.get('/class/mylike/:userId', classCtrl.getMyLike);

// 클래스 리뷰
router.post('/class/review', classCtrl.postReview);
router.put('/class/review', classCtrl.putReview);
router.delete('/class/review', classCtrl.deleteReview);
router.get('/class/review/:classId', classCtrl.getAllReview);


// generalMypage
router.get('/mypage/reviewlist', generalMypageCtrl.myReviewlist);
router.post('/mypage/authModify', generalMypageCtrl.auth); // 회원정보 수전 전 비밀번호 인증
router.patch('/mypage/modify', generalMypageCtrl.modify); // 회원정보 수정
router.post('/mypage/profile', generalMypageCtrl.profile); // 프로필 이미지 수정


// validation
router.post('/validation/loginId', validationCtrl.validateLoginId);
router.post('/validation/nickname', validationCtrl.validateNickname);


module.exports = router;