I. Creating the App
1) This section will be fairly brief because all of you coming from revamped 290 probably know more about front-end React development than any of us :). The crux of this instruction set is on flip server deployment. To be clear, this deployment guide is for a React front-end application with a Node.js back-end. Edit and Delete functionalities left un-implemented for now, goal was to create and deploy a very basic fully functional app to demonstrate the base setup and deployment process.
2) Note that because of the focus on deployment, this is an overly simplistic, barebones application, and not a complete representation of a true final project submission. The css, functionality, and HTML is fairly simplistic and barebones by design -- you should endeavor to go far beyond this narrow scope and template for your class projects.
3) If you need a refresher on React, particularly how to tie front-end to back-end, I highly recommend this tutorial series on youtube by PedroTech: https://www.youtube.com/watch?v=T8mqZZ0r-RA . This is the resource I utilized as a beginner to React; I heavily adapted boilerplate/setup code from this video series and cited in both Back-End index.js and Front-End app.js. Highly recommended, great intro to basic react development.
4) That being said, this video series is purely about creating a basic CRUD app and does not fully take advantage of React's capabilities that you learned about extensively in CS290 -- namely components. I highly recommend making your own React project more modular and utilizing components (this basic app does not).
5) Some dependencies you will need (at a minimum): useState, useEffect, Axios (front-end) and express, bodyParser, cors, and mysql (back-end).
6) When creating your project directories, I recommend splitting the crux of your project into two folders for easy navigation, aptly named "Back-End" (or "Server" for node.js server files) and "Front-End (or "Client" for the react app).
7) Finally, my recommendation is that you develop locally and then deploy to the flip server at certain checkpoints (i.e. draft submissions). Locally, it's easier to make changes as you develop with a dynamically updating front-end. On the flip, as far as I know, you'll have to run 'npm run build' for the webpage to update after any changes (if anyone knows how to dynamically update the front-end on the flip servers let me know!).

II. Flip Server Deployment Part 1 - Back-End
1) First step, get your project onto the flip servers. This isn't a guide on how to connect to the flip servers (that's covered in module pages); however, I'll leave this oft-linked video tutorial by past TA, Greg Healy here: https://www.youtube.com/watch?v=py6Km38tJBc&t=700s . He covers how to establish an on-demand SSH connection to the flip servers via vscode.
2) Once you're connected to the flip servers and in your account folder, you have a couple options depending on the terminal you are working with. If you hosted your project on github, you can simply git clone your project into your directory (make sure it has it's own folder like 'CS340 App') or if working with VSCode you can manually create a new folder and drag or copy any applicable folders/files.
3) So at this point, you should be connected to the flip servers with your project created in a directory i.e. kamanda/CS340-React-App; now 'cd' into this folder ('cd CS340-React-App').
4) Now let's 'cd' into the 'Back-End' folder (our server folder). You should have a file in here usually called index.js that contains the crux of your back-end server setup, we want to be in that directory (not to be confused with the index.js in your Front-End src folder). 
5) Once in the Back-End directory, run 'npm install' to install all our back-end dependencies onto the flip server.
6) Next, run 'npm install forever' to install forever to prep for running the server.
7) Open up your index.js and select a port at the bottom bit of code (note that some of these ports might be taken, try a unique number combination), i.e.:
app.listen(33333, () => {
    console.log("running on port 33333")
});
7) Afterwards, run alias forever='./node_modules/forever/bin/forever' so that whenever we don't have to type that long route everytime we want to run forever, we can just say 'forever'. Note that you might have to re-alias forever everytime you exit the terminal and/or close VScode.
8) Finally, to start the server, run 'forever start index.js' (or whatever you have named your root server file).
9) If you ever want to stop your server from running, just run 'forever stop index.js'. Your back-end server should now be up and running, let's proceed to the front-end.

III. Flip Server Deployment Part 2 - Front-End
1) Back out of your Back-End folder directory and 'cd' into the Front-End.
2) Run 'npm install' while in your Front-End folder to install all front-end dependencies.
3) Next, we are going to update node. This step may be different depending on your local machine. Type 'nvm version' to check if you have nvm installed. If you do not, see this resource to install and update nvm: https://github.com/nvm-sh/nvm#installing-and-updating.
4) Once you have nvm installed, we can update our version of node on the flip servers. To properly run React, we want to update to at least version 16.5.0. To do this, run 'nvm install 16.5.0'. Double check that this was successful by running 'node -v' after and make sure the terminal outputs 'v16.5.0' (you can update to a more recent version of node, but this guide was written with 16.5.0 in mind).
5) Next, we want to install pm2 by running 'npm install pm2 serve -g'.
6) Nearing the homestretch, we run 'npm run build' to run a build of our project. 
7) Finally, to deploy the react app, run 'pm2 serve build YOUR_PORT --spa'. Replace YOUR_PORT with your chosen port number AND IMPORTANT: Make sure you select a different port for your front-end than whatever you chose for the back-end.
8) With your server running and your front-end deployed, now you just need to navigate to your chosen front-end route, flip, and port URL and your project should be up and running barring any code issues (i.e. http://flip1.engr.oregonstate.edu:32345/).
9) If you want to update your front-end after code changes, all you need to do is run 'npm run build' again and your webpage will dynamically update after it finishes building.
10) If interested, here are additional resources on pm2 and serve: https://www.loginradius.com/blog/async/react-app-deployment/, https://www.npmjs.com/package/pm2

IV. Common issues:
1) Node being out of date -- make sure to follow that part of the guide closely, node needs to be updated to at least v16.0.0.
2) Being in the wrong directory, make sure you pay close attention to which directory we are supposed to be in, Back-End or Front-End, all these commands are sensitive to root directory for the most part.
3) Failing to install dependencies, 'npm install' in both Front-End and Back-End folders.
4) Failing to install and/or alias forever.
5) Standard code debug issues, faulty routes, mismatching ports, wrong ports. Remember that your back-end port in your index.js and your front-end port when you utilize pm2 serve need to be different. 
6) Not updating app.js and index.js routes from localhost to flip1/2/3 URLs going from local testing to flip deployment.
7) Not properly updating DB credentials in index.js.
8) Server crashed or went down for whatever reason. Just do 'forever stop app.js' and restart with 'forever start app.js' again.
