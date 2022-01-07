// 비밀번호 유효성
// 8~16자 영문 대 소문자, 숫자, 특수문자 사용
export function validPassword(password) {
    const regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z0-9\d@$!%*#?&]{8,16}$/;
    return regExp.test(password) ? true : false;
}

// 비밀번호와 재입력 비밀번호 일치 여부  
export function isMatchPassword(password1, password2) {
return password1 === password2 ? true : false;
}
