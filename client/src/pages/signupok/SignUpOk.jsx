import { useSelector } from "react-redux";

// 바로 signup_ok에 온 경우 에러 메시지 페이지로 보내기

const SignUpOk = () => {
    let user_id = useSelector((state) => state.user.login_id);
    console.log('리덕스 가입된 유저 아이디', user_id)

    return (
        <div>
            <h1> {user_id} 님 회원가입을 축하드립니다.</h1>
        </div>
    )
}

export default SignUpOk