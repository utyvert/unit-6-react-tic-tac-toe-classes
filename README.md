#React-Tic-Tac-Toe

##Summary
React-Tic-Tac-Toe

### Getting Started:

1. Fork this repo
  - click on fork button on the top right of the page ![Alt text](http://u.cubeupload.com/azai91/howtofork.png)
  - click on your handle to fork to your repo

1. Clone the repo
  - copy and paste github url from the right side of the ![Alt text](http://u.cubeupload.com/azai91/howtoclone.png)
  - type in the following line into your command line and insert your copies url as shown below:
  ````
  git clone *github url
  ````
1. Install gulp by the following command:
````
npm install -g
````
1. Install the necessary depencies for gulp by typing in the following command
````
npm install
````
1. After install has finished, from the main directory, run gulp:
```
gulp
```
1. Open index.html in your browser of choice.

1. Follow the steps below to build Tic Tac Toe in the file 'src/app.jsx'

1. Your changes to app.jsx will auto rebuild your application.

1. Reload your browser to see changes.


### Steps:

1. Build a react component called Box, render that component to the page.

1. Give Box a property that dictates what text it renders, render an 'X'.

1. Give Box some style! Make it a button with height 100px and width 100px.
1. Have Box render text based on its state.

1. Have Box's state change every 300ms, alternating between 'X' and 'O'.
  1. Where should this be written?
  1. This is a good moment to learn about the component cycle!
  1. Make sure to clear your interval!

1. Have Box's state change based on clicks. Set initial state to '-'.
  1. How do we set up an event handler for React components?
  1. Make Box alternate between 'X' and 'O' on clicks.

1. Let's make a new component called Row that renders 3 Box components.

1. Pull the state out of each Box and into the higher level Row component.
  1. Don't forget to pass each child Box a key property.

1. Rig up the event handling so that clicks on a Box component change the
  state on their parent Row component.

1. Now create a Board component that renders three Row components.

1. Pull the state out of the Row components and into the Board component.

1. Rig up event handling so clicks on Box's bubble up to the Board itself.
