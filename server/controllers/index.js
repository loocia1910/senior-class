const { Router } = require('express');
const router = Router();
const userCtrl = require('./user');
const teacherCtrl = require('./teacher');
const classCtrl = require('./class');
const generalMypageCtrl = require('./generalMypage');
const teacherMypageCtrl = require('./teacherMypage');
const validationCtrl = require('./validation');

// user
router.post('/signin', userCtrl.signIn);
router.delete('/signout', userCtrl.signOut);
router.post('/signup', userCtrl.signUp);
router.delete('/withdrawal', userCtrl.withdrawal); // 회원탈퇴
router.get('/auth/google', userCtrl.googleLogin);
router.get('/auth/googleCallback', userCtrl.googleLogin);
router.get('/auth/kakao', userCtrl.kakaoLogin);
router.get('/auth/kakoCallback', userCtrl.kakaoLogin);
router.get('/silentRefresh', userCtrl.silentRefresh);

// teacher
router.post('/teacher/apply', teacherCtrl.teacherApply);
router.post('/teacher/class/open', teacherCtrl.classOpen);

// class
// 클래스 불러오기
router.get('/class/:userId', classCtrl.myClass);
router.get('/class/:classId', classCtrl.oneClass);
router.get('/class/:type', classCtrl.typeClass);
router.get('/class/:type/:category', classCtrl.categoryClass);
// 클래스 찜
router.post('/class/like', classCtrl.like);
router.post('/class/unlike', classCtrl.unlike);
// 클래스 질문
router.post('/class/question', classCtrl.question);
router.post('/class/answer', classCtrl.answer);
router.get('/class/qna/:classId', classCtrl.getAllQnA);
// 클래스 리뷰
router.post('/class/review', classCtrl.postReview);
router.put('/class/review', classCtrl.putReview);
router.delete('/class/review', classCtrl.deleteReview);
router.get('/class/review/:classId', classCtrl.getAllReview);
// 클래스 결제 
router.post('/class/payment', classCtrl.payment);

// generalMypage
router.get('/mypage/myclass', generalMypageCtrl.getAllMyClass);
router.get('/mypage/myclass/:classId', generalMypageCtrl.getOneMyClass);
router.get('/mypage/likelist', generalMypageCtrl.myLikelist);
router.get('/mypage/reviewlist', generalMypageCtrl.myReviewlist);
router.post('/mypage/authModify', generalMypageCtrl.auth); // 회원정보 수전 전 비밀번호 인증
router.patch('/mypage/modify', generalMypageCtrl.modify); // 회원정보 수정
router.post('/mypage/profile', generalMypageCtrl.profile);

// teacherMypage
router.get('/:teacherId/product', teacherMypageCtrl.getMyOpendClassList);
router.get('/:teacherId/product/:classId', teacherMypageCtrl.getClassCourseList);
router.post('/:teacherId/product/:classId/video', teacherMypageCtrl.UpdateClassVideo);
router.delete('/:teacherId/product/:classId/video', teacherMypageCtrl.DeleteClassVideo);

// validation
router.post('/validation/loginId', validationCtrl.validateLoginId);
router.post('/validation/nickname', validationCtrl.validateNickname);


module.exports = router;