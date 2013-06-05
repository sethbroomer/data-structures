"use strict";


/**
 * Module exports.
 */

module.exports = DoublyLinkedList;

function DoublyLinkedList() {
    this._length = 0;
    this._head   = null;  // first item in the list
}


DoublyLinkedList.prototype = {


    /**
     * We are adding a node to the link list
     * @param {Object} value
     */
    add: function(value) {
        var node = this._createNode(value),
            currentNode,
            previousNode;

        //If this is the first item, then we do something
        if(this._head === null) {
            //we make the head point to the node
            this._head = node;
        } else {
            currentNode  = this._head;
            previousNode = currentNode;

            while(currentNode.next) {
                previousNode = currentNode;
                currentNode  = currentNode.next;
            }

            currentNode.next = node;
            node.prev        = currentNode;

        }

        this._length++;
    },

    get: function(index) {
        var currentNode = this._head;

        //check to make sure its a valid index
        //if it is not we will return an empty object
         if(!this._isValidIndex(index)) {
             return {};
         }

        //walk the tree by following the pointer assigned in next;
        for(var i =0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode.data;
    },

    size: function() {
        return this._length;
    },

    /**
     * We will remove the item at the index and return the value we removed
     * @param {Object} index
     */
    remove: function(index) {
        var currentNode = this._head,
            previousNode;

        //check to make sure its a valid index
        //if it is not we will return an empty object
        if(!this._isValidIndex(index)) {
            return {};
        }

        //if we remove the first one, we need to point to the next one
        if(index === 0) {
            currentNode = currentNode.next;
            this._head  = currentNode;

            if(this._head !== null) {
                currentNode.prev = null;
            }

        } else {

            //walk the tree and then get the previous node and the current node to remove.
            for(var i =0; i < index; i++) {
                previousNode = currentNode;
                currentNode  = currentNode.next;
            }

            //'remove' the node by pointing to the currentNode.next
            previousNode.next = currentNode.next;

            //if we are NOT the last element then we need to bridge the gap of the pointer
            if(currentNode.next !== null) {
                currentNode.next.prev = previousNode;
            }
        }

        this._length--;

    },

    insertAfter: function(index, value) {
        var currentNode = this._head,
            node;

        if(!this._isValidIndex(index)) {
            return {};
        }

        //walk the tree by following the pointer assigned in next;
        for(var i =0; i < index; i++) {
            currentNode = currentNode.next;
        }

        // create a new node
        node = this._createNode(value);

        //take the current node and assign the pointer
        node.next = currentNode.next;

        //assign the current'nodes pointer to the new inserted element
        currentNode.next = node;

        this._length++;

    },

    insertBefore: function(index, value) {
        var node;

        if(!this._isValidIndex(index)) {
            return {};
        }

        if(index === 0) {
            // create a new node
            node = this._createNode(value);

            // have the new node next point to the head
            node.next = this._head;

            //repoint the head to the new start
            this._head = node;

            this._length++;
        } else {
            this.insertAfter(index-1, value);
        }
    },

    pop: function() {
        this.remove(this._length -1);
    },

    destroy: function() {
        this._head   = null;
        this._length = 0;
    },

    /**
     * Private functions
     */

    /**
     * Creation of the node object
     */
    _createNode: function(value) {
        var node = {
              data : value
            , next : null
            , prev : null
        }

        return node;
    },

    /**
     * We want to make sure that the index passed in is valid
     */
    _isValidIndex: function(index) {
        if(index < 0 || index > (this._length -1)) {
            return false;
        }

        return true;
    }

};
