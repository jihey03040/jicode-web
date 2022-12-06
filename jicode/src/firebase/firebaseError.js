const firebaseError = (error) => {
    if ('auth/invalid-verification-code' === error.code) {
        alert('인증번호가 유효하지 않습니다.');
    } else if ('auth/session-expired' === error.code) {
        alert('인증번호가 만료되었습니다.');
    } else if ('auth/too-many-requests' === error.code) {
        alert('잠시 후 다시 시도해 주세요.');
    } else if ('The email address is badly formatted.' === error.message) {
        alert('이메일은 필수입니다.');
    } else if ('The password is invalid or the user does not have a password.' === error.message) {
        alert('패스워드를 확인하세요.');
    } else if ('auth/user-not-found' === error.code) {
        alert('해당 사용자를 찾을 수 없습니다.');
    } else if ('auth/requires-recent-login' === error.code) {
        alert('이 작업은 민감하며 최근 인증이 필요합니다. 이 요청을 다시 시도하기 전에 다시 로그인하십시오.');
    } else if ('auth/invalid-email' === error.code) {
        alert('이메일을 확인하세요.');
    } else if ('auth/wrong-password' === error.code) {
        alert('전화번호를 확인하세요.');
    } else {
        alert(error)
    }
}
module.exports = {
    firebaseError,
}
