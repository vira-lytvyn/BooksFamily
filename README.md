#BooksFamily
===========

[![Join the chat at https://gitter.im/vira-lytvyn/BooksFamily](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vira-lytvyn/BooksFamily?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is not just another tools for sharing books experience and activities. This service will help you wear whole your home library right in the pocket)) It also gives you an opportunity to create own Books Family. How? Join it and you will find out)

There are going to be a responsive web app, but it will share server side with Android app. 
So user will be able to choose what is more suitable for him. 
It is also possible, that first version of webapp will be only for desktop(it means not responsive).

===
Technologies stack

| Name      |     Reason to use      |  Alternative |
|:-----------:|:----------------------:|:-------------:|
| Angular | powerful and popular | Durandal/Knockout/Angular/Ember/React|
| HTML5 | the newest one | no one :) |
| SCSS, CSS3 | personal taste | LESS, SaaS, Susy|
| Materialize | in trend, helps to create material design, has a lot of usefull features and no need to use external plugins | Foundation/Bootstrap |
| GruntJS | modern, famous, helpful | GulpJs/Broccoli |
| BowerJS | just because it's feshionable | ? |
| MongoDB | interesting, looks to meet expectations and requirments in the best way |CouchDB + PouchDB|

additional libraries and tools:
- angular-formly - to build functional forms in easier and clearer way

and ... 

- Git, Github, git-flow, 
- Console `=)` (cmd), Sublime Text 3, SourceTree

===
Approaches

- SPA (single page application)
- desktop first (mobile app for Android is planning to release)
- graseful degradation
- material design

===
Browsers support

- Chrome (latest version)
- Firefox (latest version)
- Chrome for Mobile (latest version)
- Firefox for Mobile (latest version)

===
Build instructions

Actions described below allows you to run up app locally.

Just become a friens with Command Prompt ;)

1. Install globaly the latest versions of 
	- Git
	- Node.js
	- MongoDB
	- Bower.js
	- Grunt.js
2. Install SASS
	- Ruby (to compile Sass)
		- download http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-1.8.7-p374.exe?direct
		- inslatt it globaly and check if this was added to system path (type ruby -v grom console)
		- ruby -v
		- gem -v
	- Sass
		- Open your Terminal or Command Prompt.
		- gem install Sass
		- sass -v
3. Run from the Terminal:
	- npm install
	- bower install
	- grunt serve(please, run mongod from your local data directory before doing this)
