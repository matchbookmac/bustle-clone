Bustle.ApplicationController = Ember.Controller.extend({
  slideNum: 0,
  actions: {
    slideRight: function() {
      this.slideNum++;
      if (this.slideNum > 2 || this.slideNum < 0) {
        this.slideNum = 0
      }
      $('#slide' + this.slideNum).show();
      $('#slide' + (this.slideNum - 1)).hide();
      $('#slide' + (this.slideNum + 2)).hide();
    },
    slideLeft: function() {
      this.slideNum--;
      if (this.slideNum > 2 || this.slideNum < 0) {
        this.slideNum = 2
      }
      $('#slide' + this.slideNum).show();
      $('#slide' + (this.slideNum + 1)).hide();
      $('#slide' + (this.slideNum - 2)).hide();
    }

  }
});
