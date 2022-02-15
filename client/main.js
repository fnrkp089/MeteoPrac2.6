import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating'; //템플릿을 사용하기 위한 모듈 가져오기
import { AddressBook } from '../lib/collections';
import { Session } from 'meteor/session'
import { NotEmptyString, EmailString, PhoneStirng, BirthdayString} from '../lib/checkPatterns'
//import { ReactiveVar } from 'meteor/reactive-var'; // 세션과 유사하지만 고성능의 경량화된 리액티비티
import './main.html';

Template.addressList.onCreated(function(){
  this.subscribe('AddressBookData', 5); //템플릿이 생성됨과 동시에 구독이 이루어져야한다.
})
Template.addressList.helpers({
  list(){
    return AddressBook.find({},{sort:{name:1}});
  }
})
Template.addressList.events({
  
})

Template.addressListItem.helpers({
  editing() {
    return this._id == Session.get('editItem');
  }
})
Template.addressListItem.events({
  'click button[name=remove]' (evt){
    AddressBook.remove({_id : this._id}) // each list 구문 안에서 tr을 생성할때 사용한 각각의 다큐먼트의 _id
  },
  'click button[name=modify]' (evt){
    Session.set('editItem', this._id) 
  },
  'click button[name=save]' (evt, tmpl){
		let address = {
			name:tmpl.find('input[name=name]').value,
			phone:tmpl.find('input[name=phone]').value,
			email:tmpl.find('input[name=email]').value,
			company:tmpl.find('input[name=company]').value,
			birthday:tmpl.find('input[name=birthday]').value,
		}
		try{
			check(address.name, NotEmptyString); // 이름 체크
			check(address.company, NotEmptyString); // 회사 체크
			check(address.email, EmailString);
			check(address.phone, PhoneStirng);
			check(address.birthday, BirthdayString);
		} catch(err){
			alert('입력하신 값을 확인해 주세요 : ERR : ' + err.message );
			return;
		}

		AddressBook.update({_id:this._id}, {$set:address});
		Session.set('editItem', null);
	},
  'click button[name=cancel]' (evt){
    Session.set('editItem', null) 
  },
})

Template.addressInput.events({
  'click button[name=saveAddress]'(evt,tmpl){
    let address = {
      name:tmpl.find('input[name=name]').value,
      phone:tmpl.find('input[name=phone]').value,
      email:tmpl.find('input[name=email]').value,
      company:tmpl.find('input[name=company]').value,
      birthday:tmpl.find('input[name=birthday]').value,
      owner: Meteor.userId()//로그인된 사용자 아이디 추가.
    }
    try{
      check(address.name, NotEmptyString); // 이름 체크
      check(address.company, NotEmptyString); // 회사 체크
      check(address.email, EmailString);
      check(address.phone, PhoneStirng);
      check(address.birthday, BirthdayString);
    } catch(err){
      alert('입력하신 값을 확인해 주세요 : ERR : ' + err.message );
      return;
    }
    //삽입
    AddressBook.insert(address);
    //초기화
    tmpl.find('input[name=name]').value = '';
		tmpl.find('input[name=phone]').value = '';
		tmpl.find('input[name=email]').value = '';
		tmpl.find('input[name=company]').value = '';
		tmpl.find('input[name=birthday]').value = '';
  }
})