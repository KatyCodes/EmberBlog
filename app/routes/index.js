import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

    actions: {
        savePost3(params) {
          Object.keys(params).forEach(function(key) {
            if(params[key]==undefined) {
              alert("Please fill out all fields.");
              // console.log("undef");
          } else {
              var newPost = this.store.createRecord('post', params);
              newPost.save();
              this.transitionTo('index');
          }
        });
      }
    }
  });
