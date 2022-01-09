// 비밀번호 유효성
// 8~16자 영문 대 소문자, 숫자, 특수문자 사용합니다.
export function regExpPassword(password) {
    const regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z0-9\d@$!%*#?&]{8,16}$/;
    return regExp.test(password) ? true : false;
}

// 비밀번호와 재입력 비밀번호 일치 여부  
export function isMatchPassword(password1, password2) {
return password1 === password2 ? true : false;
}

// 아이디 유효성 검사
// 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
export function regExpLoginId(login_id) {
  const regExp =/[a-z0-9_-]{5,20}/;
  return regExp.test(login_id) ? true : false;
}

// 닉네임 유효성 검사
// 3~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
export function regExpNickname(nickname) {
  const regExp =/[a-z0-9_-]{3,20}/;
  return regExp.test(nickname) ? true : false;
}

// 이름 유효성 검사
// 한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)
export function regExpName(name) {
  const regExp =/^[a-zA-Z가-힣]*$/;
  return regExp.test(name) ? true : false;
}
