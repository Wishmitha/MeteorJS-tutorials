import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    console.log(Meteor.settings.public.test);
    console.log(Meteor.settings.private.test);

});
