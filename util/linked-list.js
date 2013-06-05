"use strict";


/**
 * Module exports.
 */

module.exports = LinkedList;

function LinkedList() {
    this._length = 0;
    this._head   = null;  // first item in the list

}


LinkedList.prototype = {


    /**
     * We are adding a node to the link list
     * @param {Object} value
     */
    add: function(value) {
        var node = this._createNode(value),
            currentNode;

        //If this is the first item, then we do something
        if(this._head === null) {
            //we make the head point to the node
            this._head = node;

        } else {
            currentNode = this._head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;

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
     * We will remove the item at the index
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
        } else {
            //walk the tree and then get the previous node and the current node to remove.
            for(var i =0; i < index; i++) {
                previousNode = currentNode;
                currentNode  = currentNode.next;
            }

            //'remove' the node by pointing to the currentNode.next
            previousNode.next = currentNode.next;
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

    _createNode: function(value) {
        var node = {
              data : value
            , next : null
        }

        return node;
    },

    _isValidIndex: function(index) {
        //check to make sure its a valid index
        //if it is not we will return an empty object
        if(index < 0 || index > (this._length -1)) {
            return false;
        }

        return true;
    }

};
