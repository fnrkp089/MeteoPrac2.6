import { Meteor } from 'meteor/meteor';
import { AddressBook } from '../lib/collections';

Meteor.publish('AddressBookData', function(count){
    return AddressBook.find({},{limit:10, sort:{name:1}});
});
