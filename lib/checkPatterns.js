//데이터 검증
import { check } from 'meteor/check'

export const NotEmptyString = Match.Where((el) => { //사용자 정의 패턴.
    check(el, String);
    return el.length > 0 ;
})
export const EmailString = Match.Where((el) => {
    check(el, String);
    return /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(el); //정규표현식
});
export const PhoneStirng = Match.Where((el) => {//000-0000-0000
    check(el, String);
    return /^\d{3}-\d{3,4}-\d{4}$/.test(el);
})
export const BirthdayString = Match.Where((el) => { // yyyy/mm/dd
    check(el, String);
    return /^(19[7-9][0-9]|20\d{2})\/(0[0-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/.test(el);
})