# Senior React Developer Code Challenge

This coding challenge is an opportuninty for you to show us your advanced JavaScript and React skills. UI is not the goal of this challenge.

Send us a link to the github repository that we can easily clone and run.

# Problem
[Here](https://github.com/Adylic/react-coding-challenge) you can find the skeleton of the application. Clone it and use as a starting point for your application.

In the `src/back-end/server.js` you can find a `mockFetch` function that you can use as if you were fetching data from a real server. The `mockFetch` exposes two endpoints: `/variant` and `/columns`.

Each endpoint uses timeout to resolve the promise at a random time.  
15% of responses throw an internal server error.
10% of responses throw and unauthorised error.

### Variant
There is only a single variant returned by the `mockFetch` function. A variant is an object. One of its properties is `working_data`. There you can find frames objects `first`, `middle`, `last`. 
Each frame has a `frame_id` and a `content` object. The `content` object includes `key-value` pairs.

### Columns
When you `mockFetch` columns you will receive an array of objects. Every object has a `parent_frame_id` that corresponds to the `frame_id` of a frame in the `variant.working_data.frames`. 

## Task
[Here](https://www.figma.com/proto/SaRvPAf6Hltz9xe04obPEx/Untitled?node-id=15%3A0&scaling=min-zoom) is the design of the final product. 
Use the best practices to build the application that meets your 'production-ready' definition.

## Requirements
1. The server uses snake notation. Usually, the front-end uses camel-case notation. Create an universal function that will transform returned `variant` and `columns` to the camel case format.
2. Create a UI that displays a single frame from the `variant` in form of a row. Render only data that is present in the `columns` array. Hide columns that have `is_hidden` field set to `true`. Ignore columns you can find in `variant.working_data.frames` but are not present in `columns` array. User should be able to switch between frames of the `variant` by clicking the square buttons in the top-left part of the application.
3. When user clicks on the `Copy Frames` button all the variant's frames should be copied, stored in state and displayed.
4. When the application throws an 'Unauthorized' error, it should show a pop-up window with text "You are not authorised". User should be able to close the pop-up window by clicking on the "X" or by clicking away.

## How to run
1. open the terminal and go to the folder exercise
1. install all dependency ```npm i```
2. run the test ```npm start```

## Approach and solution
### Solution 1
In `src/back-end/server.js` I added two methods:
- `objectKeysToCamelCaseFormat(data)` that iterate though all node objects and call toCamelCase method to update the keys recursively and returns an object (Object or Array).
- `toCamelCase(value)` is the methods that return the camel-case format of the key

### Solution 2
I am using Redux to comunicate between components and update the `frame` object use to update the `tableContent` component

### Solution 3
Not started: the idea is dispatch a new event that iterate all first, middle and last object inside `workingData` and update a new store variable called `allFrames` and reuse this store variable to update the current `tableContent`.

### Solution 4
Partially implemented: In `src/back-end/server.js` I update mockFetch function with `try/catch` to return the error and handle it dispatching a new action, update the store and captchure the error.
Not started: Create a new Content component called CardError to display the error and a new Panel component for the background views where it is possible to dipsatch new events and update the store removing the error message.


## Folder structure that I added for this exercise
`src/store` contains the store with all actions and reducers that are called when the page is rendered or at every user action
`stc/components` contains all components dived by pages, layout, panels, content





