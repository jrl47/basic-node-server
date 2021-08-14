# basic-node-server
A basic nodejs server to test out html/css/js projects nonlocally.

Don't be intimidated by the minimal infrastructure (node + npm + webpack) used here! It's simpler than you think =)

## Setup
First, you need to go install node and npm.
Once you have node, at least on Windows, next you will open a program called "Node.js command prompt".
Note: for some reason, you do *not* want to run the seemingly correct "Node.js".

## package.json and npm install
The package.json file that serves as a sort of manifest for node projects.
For example, this is where it is specified that app.js should be run when the "npm start" command is entered.
Right now, we need it because we want to install our dependency, webpack (and webpack-cli).
To do that, navigate to the directory for this project and run the following command:
    - **npm install**
This command will download and install all of the dependencies listed in package.json. There's some way to manage their versions.
Note: It will also generate a package-lock.json file. It's needed for some infra reason. Don't edit it or add it to your git repo.

## src
To use this server, all files to be served should be placed in the css and js subfolders of the src folder.
Basic demo css and js files have been included as a demo.
TODO: Update the basic js files to use the imports and exports made possible with webpack.
To package up the javascript into the bundled js file pointed to by the index.html file, run the following command:
    - **npm run-script build**
That will generate the unified javascript file for the whole project in a top-level directory called "dist".
Once that's been done, you can open index.html, since the javascript file it's pointing at will have been created.

## app.js
This is the node.js server file. Run it with the following command:
    - **npm start**
Then, you can go in your browser to localhost:PORT_NUMBER (e.g. 13854 is what I picked for some reason here) and see "Hello World!"