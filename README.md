# WDI-PROJECT-4-CLIENT - NihinGo!

[Heroku](https://nihongo-client.herokuapp.com/)

**Skills**: AngularJS, Ruby, Rails, JavaScript, Express, Node.js, HTML5, PostgreSQL, SCSS, Bootstrap, Bower, JWT.

![](https://i.imgur.com/ftn7BID.jpg)
NihonGo! (meaning Japanese in...Japanese) is an app for learning the Japanese Hiragana and Katakana character sets. Through my own experiences of trying to learn what is a pretty complicated writing system I developed an app that allows the learning and practice of character sets, measuring progress through tests and moving on to learning to construct words. Built with a Rails API paired with a PostgresSQL database and AngularJS front end the app is fully authenticated. 

I set out with my primary goal being to create a visually clean and attractive site, wanting to put emphasis on the time spent styling. I spent a large portion of time planning out the required resources and relationships to enable a swift set up of my Rails API and database. Followed by extensive wireframing and mocking up page designs in Photoshop. Thanks to this planning the project went very smoothly and I was able to achieve all planned features and a visual styling that I was satisfied with within the allotted week.

N.B. Apart from the Mt Fuji image all photographs are my own taken on my travels across Japan.

#Study 
Once a user has registered and logged in they are greeted with a landing page that provides 3 options of study, Hiragana, Katakana and Words. Each panel rotates on hover to display the category name.

![](https://i.imgur.com/RDYtYfM.jpg)

#Category - Hiragana/Katakana
![](https://i.imgur.com/qNy9VQY.jpg)

Upon selecting a category users are greeted with the option to select groups of characters to study, grouped as they are when viewing the standard character tables. Lastly there is the option to take a test for the category you are in.

![](https://i.imgur.com/pLiNRXX.jpg)

#Category - Words

Once a user has familiarised themselves with a character set they can move to the words section. Words are grouped into themes and allow the user to practice the character sets while building out their vocabulary.

#Exercise
![](https://i.imgur.com/uLpe5yM.png)
When a user has selected a group of characters to study they are taken to the exercise page where characters are selected at random from that group and the user is required to input the correct response. This is infinite and there is a record kept of your tries and number of correct answers. If on a test version all 46 characters are show at random one at a time, you have only one attempt at each character and are provided with a score at the end. This scored is recorded in the database for tracking purposes.

#Tips
If stuck on a particular character there is a tips pull out that animates upon click and displays the solutions to each character in that group.
![](https://i.imgur.com/JNUBcuT.png)
