module.exports = function() {

  var sphero = require("sphero");
  var myo = require('myo');

  // myo = Myo.create();

  myo.connect('com.charliegerard.test', require('ws'));

  myo.on('arm_recognized', function(){
    console.log('good!', this.id);
  })

  myo.on('arm_lost', function(){
    console.log('arm lost', this.id);
  })

  // Set this to the port of your Sphero on your computer.
  var device = sphero('/dev/tty.Sphero-RBR-AMP-SPP-1');

  var safeMode = true;

  // myo.unlock();

  var controlSphero = function(spheroBall) {
    myo.on('wave_out', function(){
      console.log('RIGHT');
      spheroBall.heading = 90;
      spheroBall.roll(70, 90, 1);
    })

    myo.on('wave_in', function(){
      console.log('LEFT!');
      spheroBall.roll(70, 270, 1);
    })

    myo.on('fist', function(){
      console.log('FORWARD');
      spheroBall.roll(70, 0, 1);
    })

    myo.on('fingers_spread', function(edge){
      stopSphero(spheroBall);
    })

  };

  var stopSphero = function(spheroBall) {
    spheroBall.roll(0,spheroBall.heading||0,0);
  };

  console.log("waiting for Sphero connection...");

  device.connect(function() {
    console.log('connected to Sphero');
      controlSphero(device);
  });
};
