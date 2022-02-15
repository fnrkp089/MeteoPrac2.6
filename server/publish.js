import { Meteor } from 'meteor/meteor';
import { AddressBook } from '../lib/collections';

Meteor.publish('AddressBookData', function(count){
    let userId = this.userId
    if(userId){
        return AddressBook.find({owner:userId},{limit:count, sort:{name:1}});
    }
});
