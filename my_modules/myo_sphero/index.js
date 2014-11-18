module.exports = function() {

  var Leap = require('leapjs');
  var spheron = require('spheron');
  var myo = require('myo');

  myo = Myo.create(0);

  myo.on('arm_recognized', function(){
    console.log('good!', this.id);
  })

  myo.on('arm_lost', function(){
    console.log('arm lost', this.id);
  })

  // ------------------------------
  // Need to test these 2 gestures
  // ------------------------------
  // myo.on('double_tap', function(){
  //   this.zeroOrientation();
  //   console.log('double tap') ;
  // });

  // myo.on('gyroscope', function(data){
  //   if(data.y < -2) console.log('hit!');
  // });

  // Set this to the device Sphero connects as on your computer.
  var device = '/dev/tty.Sphero-RBR-AMP-SPP';

  var safeMode = true; //Turn this off if Sphero is in water!

  var controlSphero = function(sphero) {
    myo.on('wave_out', function(){
      console.log('RIGHT');
      sphero.heading = 90;
      sphero.roll(70, 90, 1);
    })

    myo.on('wave_in', function(){
      console.log('LEFT!');
      sphero.roll(70, 270, 1); //Heading is expressed in degrees so 270 will make the ball move to the left.
    })

    myo.on('fist', function(){
      console.log('FORWARD');
      myo.requestBluetoothStrength();
      sphero.roll(70, 0, 1);
    })

    myo.on('fingers_spread', function(edge){
      console.log('STOP');
      if(!edge) return;
      // myo.vibrate();
      stopSphero(sphero);
      ball.setRGB(spheron.toolbelt.COLORS.WHITE).setBackLED(255);
    });
  };

  var stopSphero = function(sphero) {
    sphero.roll(0,sphero.heading||0,0);
  };

  var ball = spheron.sphero().resetTimeout(true);
      ball.open(device);

  console.log("waiting for Sphero connection...");
  ball.on('open', function() {
  	console.log('connected to Sphero');
      ball.setRGB(spheron.toolbelt.COLORS.PURPLE).setBackLED(255);
      controlSphero(ball);
  });
};