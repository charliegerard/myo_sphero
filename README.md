#Experiment using the Myo Armband to control the Sphero robotic ball.

![myo](http://www.hobbr.com/wp-content/uploads/2014/02/Myo-gesture-control-armband-1-300x282.jpg)
<img src="http://orbotix.wpengine.netdna-cdn.com/wp-content/uploads/sphero-mark-reg1.jpg" width="200px" margin-top="-50px">

####To run this app, follow these steps:

1. Clone this repo.
2. Install node on your computer if you haven't already http://nodejs.org
3. Run 'npm install' in your terminal to install the dependencies needed.
4. To find the reference of the Sphero on your computer, run 'ls /dev/tty.Sphero*' in your Terminal and copy the path returned.
5. Paste this path in the index.js file when the 'device' variable is declared.
6. Enable the bluetooth connection on your computer.
7. Wear the Myo armband and execute the unlock gesture.
7. Run 'node app.js' in your terminal and enjoy!

You should see a message in your terminal when the Sphero is connected but it may take a few seconds. If nothing seems to happen just relaunch the app.

##Current controls:

* Wave in to make the ball go left.
* Wave out to make the ball go right.
* Close your fist to make the ball go forward.
* Spread your fingers to stop the ball from rolling.


##Frameworks:

* [Express.js](http://expressjs.com/)
* [Myo.js](https://github.com/stolksdorf/myo.js)
* [Spheron](https://github.com/alchemycs/spheron)
* [Ws](http://einaros.github.io/ws/)


##Next steps:

* The 'thumb to pinky' gesture does not seem to be picked up by my Myo but once I fix this, I should apply it to a direction of the Sphero.


