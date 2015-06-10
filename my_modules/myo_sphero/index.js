module.exports = function() {

  var sphero = require("sphero");
  var myo = require('myo');

  myo = Myo.create();

  myo.on('arm_recognized', function(){
    console.log('good!', this.id);
  })

  myo.on('arm_lost', function(){
    console.log('arm lost', this.id);
  })

  // Set this to the device Sphero connects as on your computer.
  var device = sphero('/dev/tty.Sphero-RBR-AMP-SPP');

  var safeMode = true;

  myo.unlock();

  var controlSphero = function(spheroBall) {
    myo.on('wave_out', function(){
      console.log('RIGHT');
      spheroBall.heading = 90;
      spheroBall.roll(70, 90, 1);
    })

    myo.on('wave_in', function(){
      console.log('LEFT!');
      spheroBall.roll(70, 270, 1); //Heading is expressed in degrees so 270 will make the ball move to the left.
    })

    myo.on('fist', function(){
      console.log('FORWARD');
      spheroBall.roll(70, 0, 1);
    })

    myo.on('fingers_spread', function(edge){
      // console.log('BACKWARD');
      // spheroBall.roll(70, 180, 1);
      // ball.setRGB(spheron.toolbelt.COLORS.WHITE).setBackLED(100);
      stopSphero(spheroBall);
    })

    // myo.on('rest', function(){
    //   console.log('STOP');
    //   // if(!edge) return;
    //   // myo.vibrate();
    //   stopSphero(sphero);
    //   ball.setRGB(spheron.toolbelt.COLORS.WHITE).setBackLED(255);
    // })
  };

  var stopSphero = function(spheroBall) {
    spheroBall.roll(0,spheroBall.heading||0,0);
  };

  console.log("waiting for Sphero connection...");

  device.connect(function() {
    console.log('connected to Sphero');
  //     ball.setRGB(spheron.toolbelt.COLORS.PURPLE).setBackLED(255);
      controlSphero(device);
  });
};