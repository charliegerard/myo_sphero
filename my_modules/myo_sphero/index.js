module.exports = function() {
  // modified local copy of module because official one
  // is not working with latest version of serialport.
  const sphero = require("../sphero");
  const myo = require('myo');

  myo.connect('com.charliegerard.test', require('ws'));

  myo.on('arm_recognized', () => console.log('good!', this.id));

  myo.on('arm_lost', () => console.log('arm lost', this.id));

  // Set this to the port of your Sphero on your computer.
  const device = sphero('/dev/tty.Sphero-RBR-AMP-SPP');

  // myo.unlock();

  const controlSphero = spheroBall => {
    myo.on('wave_out', () => {
      console.log('RIGHT');
      spheroBall.heading = 90;
      spheroBall.roll(70, 90, 1);
    })

    myo.on('wave_in', () => {
      console.log('LEFT!');
      spheroBall.roll(70, 270, 1);
    })

    myo.on('fist', () => {
      console.log('FORWARD');
      spheroBall.roll(70, 0, 1);
    })

    myo.on('fingers_spread', edge => {
      stopSphero(spheroBall);
    })

  };

  const stopSphero = spheroBall => spheroBall.roll(0,spheroBall.heading||0,0);

  console.log("waiting for Sphero connection...");

  device.connect(() => {
    console.log('connected to Sphero');
    controlSphero(device);
  });
};
