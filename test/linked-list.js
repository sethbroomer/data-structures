"use strict";

var linkedList = require('../util/linked-list'),
    should     = require('should');

describe('Linked List Test', function(){

  it('should have a linked list', function(){
       linkedList().should.be.true;
  });
})