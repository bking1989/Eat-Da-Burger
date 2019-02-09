# Eat-Da-Burger
A Restaurant App Built with Node.js, Express.js, and Handlebars

## Overview
As part of an assignment for coding boot camp, we were tasked with creating a web application that would display a menu listing various hamburgers. In addition to showing the menu, users visiting the site would be permitted to add new items to the menu via a form at the bottom of the application. They would also be able to update each menu item by clicking a button on it, and be taken to a page where they can make any edits.

The core of this project is built on four important pieces of web technology:

- [MySQL](https://www.mysql.com/) - A database tool that allowed us to store our menu items as data, and then retrieve them when needed
- [Node.js](https://nodejs.org/en/) - JavaScript technology that allows us to create virtual servers for our web application to access
- [Express.js](https://expressjs.com/) - A JavaScript framework that streamlines connecting to virtual servers and creating routes for our data
- [Handlebars](https://handlebarsjs.com/) - A JavaScript framework that creates semantic templates with minimal use of HTML files

Altogether, these four pieces of technology enabled us to (a) create a virtual server, (b) store menu data inside of it, and (c) give us methods to create, read, update, and delete this data. This last point is often referred to as the CRUD model.

Along with using these libraries and frameworks, we used Node.js' built-in package manager, [NPM](https://www.npmjs.com/), in order to install modules to help streamline a lot of the data submission and retrieval. These modules are as followed:

- [express](https://www.npmjs.com/package/express) - Gave us the JavaScript for using Express.js to connect to our virtual server
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) - Gave us the JavaScript needed to set up Handlebar templates
- [mysql](https://www.npmjs.com/package/mysql) - Gave us the JavaScript used to access databases and make MySQL queries

Boiled down, the final product is as followed: menu items are held as MySQL data on a virtual server, and accessed through Node.js and Express.js. These same tools allow users to (a) add new items to the menu and (b) update preexisting items, through accessing the same virtual server.