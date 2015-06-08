Bustle.ApplicationController = Ember.Controller.extend({
  slideNum: 0,
  actions: {
    slideRight: function() {
      this.slideNum++;
      if (this.slideNum > 2 || this.slideNum < 0) {
        this.slideNum = 0
      }
  // debugger;
      $('#slide' + this.slideNum).show();
      $('#slide' + (this.slideNum - 1)).hide();
      $('#slide' + (this.slideNum + 2)).hide();
// debugger;
    }
  }
});
