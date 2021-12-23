const { Router } = require('express');
const router = Router();
const userCtrl = require('./user');
const teacherCtrl = require('./teacher');
const classCtrl = require('./class');
const generalMypageCtrl = require('./generalMypage');
const teacherMypageCtrl = require('./teacherMypage');

// user
router.post('/signin', userCtrl.signIn);
router.post('/signout', userCtrl.signOut);
router.post('/signup', userCtrl.signUp);
router.delete('/withdrawal', userCtrl.withdrawal);
router.get('/auth/google', userCtrl.googleLogin);
router.get('/auth/googleCallback', userCtrl.googleLogin);
router.get('/auth/kakao', userCtrl.kakaoLogin);
router.get('/auth/kakoCallback', userCtrl.kakaoLogin);

// teacher
router.post('/teacher/apply', teacherCtrl.teacherApply);
router.post('/teacher/class/open', teacherCtrl.classOpen);

// class
// 클래스 불러오기
router.get('/class/:classId', classCtrl.oneClass);
router.get('/class/:type', classCtrl.typeClass);
router.get('/class/:type/:category', classCtrl.categoryClass);
// 클래스 찜
router.post('/class/like', classCtrl.like);
router.delete('/class/like', classCtrl.unlike);
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
router.post('mypage/auth', generalMypageCtrl.auth);
router.patch('mypage/profile', generalMypageCtrl.updateProfile);

// teacherMypage
router.get('/:teacherId/product', teacherMypageCtrl.getMyOpendClassList);
router.get('/:teacherId/product/:classId', teacherMypageCtrl.getClassCourseList);
router.post('/:teacherId/product/:classId/video', teacherMypageCtrl.UpdateClassVideo);
router.delete('/:teacherId/product/:classId/video', teacherMypageCtrl.DeleteClassVideo);

module.exports = router;