# Project Overview

## Project Description
This app is intented to be for those that have watched Game of Thrones and also for those that have never seen it. They can get a good idea of the show by seeing quotes from the show and see the names of characters as well.

## Project Links
- [github repo](https://github.com/koshy123/Game-Of-Thrones) 
- [deployment](https://game-of-thrones-medp.vercel.app/components/Quote) 
- [demo recording]()

## Wireframes & React Component Hierarchy

- [wireframes](https://res.cloudinary.com/dnhqnd8pv/image/upload/v1669218989/IMG_4706_n6ayzm.heic) 
- [react architecture](https://res.cloudinary.com/dnhqnd8pv/image/upload/v1669222964/architecture_yacbwu.png)


### MVP/PostMVP

MVP- 
Will fetch data from the API with axios. After getting the data on the page, it will be passed down the child components. 
Will be able to cycle through the quotes and show info about who said the quote as well.

Post MVP- 
Have an input to guess the name of who said the quote and have it keep score if you got it correct.
There will also be another section about the new sequel show "House of the Dragon" which will pull from a custom made API.


### MVP EXAMPLE
- The axious fetch from Game of thrones API
- The state that is passed down from App.js to Quote.js
- The various components that are linked to each other with Router and Link

### PostMVP EXAMPLE
- An input that you can guess the name of who said the quote. It will increase score if you get it right. There will be a timer to see how many you can do within an alloted time period.

## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding API | H | 3hrs| 5hrs | 6hrs |
| Working with API | H | 3hrs| 7hrs | 8hrs |
| Using State | H | 3hrs| 6 hrs | 2.5hrs |
| Linking Components | H | 3hrs| 5hrs | 6hrs |
| New Quote Feature | H | 2hrs| 6hrs | 7hrs |
| CSS | H | 7hrs| 4hrs | 4hrs |
| Deployment | H | 1hrs| 2hrs | 2hrs |
| Total | H | 22hrs| 35hrs | 35.5hrs |



## Additional Libraries
CSS - to add styling 
Axios- to pull the data from API 
Bootstrap - uploaded to make CSS easier
ReactRouter- to use Routes and Route
react - to use Link
https://gameofthronesquotes.xyz/  - The API library used for data

## Code Snippet
This is the code that allows me to click another random quote.
```
function nextQuote(){
  setQuote(!quote)
}

```


## Issues and Resolutions
- I had a big issue with how to pass down data to the children. The solution was that I was pulling the data from a child, and I needed to pull data in the App.js and then pass it down. 
- To start off I had issued with react-router and not being able to use the library. After restarting and installing, it was able to work properly. 

#### SAMPLE.....
**ERROR**:  Failed to compile ./src/components/App/App.js Module not found: Can't resolve 'react-router-dom'.
**RESOLUTION**: Install and update react-router-dom


