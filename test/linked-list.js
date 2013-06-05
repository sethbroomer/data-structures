"use strict";

var LinkedList = require('../util/linked-list'),
    should     = require('should');

describe('Linked List Test', function(){
    var list = new LinkedList();

    beforeEach(function() {
        for(var i =0; i < 10; i++) {
            list.add(i);
        }
    });


    afterEach(function() {
        list.destroy();
    });

   it('should have 10 items', function(){
        list.size().should.equal(10);
   });

   it('should get a value of 10', function(){
        list.get(9).should.eql(9);
   });

   it('should be an empty object', function(){
        list.get(19).should.eql({});
   });

   it('should have 9 items', function(){
        list.remove(5);
        list.size().should.equal(9);
        list.get(6).should.eql(7);
        list.get(4).should.eql(4);
        list.get(5).should.eql(6);
   });

   it('should have 9 items', function(){
        list.pop();
        list.size().should.equal(9);
        list.get(8).should.eql(8);
   });
   it('should have 9 items', function(){
        list.remove(0);
        list.size().should.equal(9);
        list.get(0).should.eql(1);
   });


   it('should have 11 items with an insert after', function(){
        list.get(5).should.eql(5);
        list.insertAfter(5,'new node');
        list.size().should.equal(11);
        list.get(5).should.eql(5);
        list.get(6).should.eql('new node');
        list.get(7).should.eql(6);
   });


   it('should have 11 items with an insert before', function(){
        list.get(5).should.eql(5);
        list.insertBefore(5,'new node');
        list.size().should.equal(11);
        list.get(4).should.eql(4);
        list.get(5).should.eql('new node');
        list.get(6).should.eql(5);
   });

   it('should have 11 items with an insert before at index 0', function(){
        list.get(5).should.eql(5);
        list.insertBefore(0,'new node');
        list.size().should.equal(11);
        list.get(0).should.eql('new node');
        list.get(1).should.eql(0);
   });

})