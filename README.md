# CCPS530FinalProject
### Final Project Deployed on AWS
http://www.denimoclockfinal.com.s3-website.us-east-2.amazonaws.com/

### mySQL AWS RDS
http://ec2-3-17-165-24.us-east-2.compute.amazonaws.com/SamplePage.php
### Demo Vid:
finalProjectDemo.MP4
## Overview
For my CCPS 530 project, I built a basic website using HTML, CSS, php, javascript, and JQuery. Since this was my first exposure to webdev, I tried to utilize most of the languages covered on sololearn. This website was developed around the requirements outlined on the CCPS 530 Final Project marking rubric. This website was deployed on AWS and included the following elements:

## Deployment: 
Main html website - including associated css / js / jquery / php files - deployed on AWS within one bucket.

## Database Connection:
mySQL deployed on AWS RDS instance. Files contained within db folder. Deployed files include:
-SamplePage.php
-SamplePage.css

Originally deployed in Heroku, but could not get my db to interface with my html page. The queries.js and index.js files were my original Heroky attempt and contain the get, post, and pre functions. These .js files were sucessfully deployed on heroku and the db was working in terminal, but I had issues interfacing the db with the html. The db code is included in my repositiory. 

Database Files:
The working database consists of the following files saved in the db folder:
SamplePage.css
SamplePage.php

## Bootstrap:
colorpicker
image resizing
Bootstrap is implemented for resizing the webpage based on which device it's opened on. 

## API's using JQuery
GifPlayer
http://rubentd.com/gifplayer/
The gif player pulls in the API to animate the .png by using mouseover. 

Weather API
https://openweathermap.org/api
The weather API pulls in the json data and parses the weather .png as well as the current temperature. 

CSS and javascript paired with JQuery were used to format the website and add responsiveness.
