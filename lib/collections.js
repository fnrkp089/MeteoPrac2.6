//2.6 새로운 몽고 디비 컬렉션 생성하기
import { Mongo } from 'meteor/mongo';

/*몽고DB 컬렉션명은 소문자로 쓰고 미티어 컬렉션명의 시작은 대문자로 한다. 
둘 이상의 단어로 구성된 컬렉션은 두 번째 단어부터 각 단어의 첫 글자를 대문자로 작성하기로 한다.*/
export const AddressBook = new Mongo.Collection('addressBook');
if(Meteor.isServer){
    //서버의 접근에 대한 제약을 설정하는것이기에 isServer라는 서버코드블록 안에 작성.
    AddressBook.allow({
        insert(userId, doc){ // 주소의 소유자owner를 클라이언트에서 로그인된 사용자의 아이디로 설정.
            return (userId && doc.owner === userId); // 서버측에 로그인된 사용자 아이디와 비교하여 두 아이디가 같을때만 등록할수 잇도록.
        },
        update(userId, doc, fields, modifier){
            return (userId && doc.owner === userId); // 서버측에 로그인된 사용자 아이디와 비교하여 두 아이디가 같을때만 수정할수 잇도록.
        },
        remove(userId, doc){
            return (userId && doc.owner === userId); // 서버측에 로그인된 사용자 아이디와 비교하여 두 아이디가 같을때만 삭제할 수 있도록.
        }
    })
}
