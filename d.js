Sprite = function () {
  this.init = function (name, points) {
    this.name     = name;
    this.points   = points;

    this.vel = {
      x:   0,

    };

    this.acc = {
      y:   0,
      rot: 0
    };
  };