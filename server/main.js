import { Meteor } from 'meteor/meteor';

import '/imports/collections/collections.js';
import '/imports/server/publications/publications.js';

// IMPORT all collections, publications and methods
/*
 * init.js
 *
 * This File includes all the startup code when the server is launced
 */

Meteor.startup(function() {
    console.log('App started');
});
