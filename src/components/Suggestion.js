import React from 'react';
import '../App.css';

const suggestionList = [
    {name: "Legion of Honor", indoor: true, url:"https://www.google.com", photoURL:"https://s3-media0.fl.yelpcdn.com/bphoto/10ix1EsZJDK9K08P5U85JA/o.jpg"},
    {name: "Golden Gate Park", indoor: false, url:"https://www.google.com", photoURL:"https://h7.alamy.com/comp/3/0fa990a7bd00438a87eac5194f78456b/rm2w9a.jpg"},
    {name: "Land's End", indoor: false, url:"https://www.google.com", photoURL: "https://image.shutterstock.com/image-photo/hiking-lands-end-trail-sunset-600w-1031442700.jpg"},
    {name: "SF MoMA", indoor: true, url:"https://www.google.com", photoURL:"https://sfmoma-media-dev.s3.us-west-1.amazonaws.com/www-media/2018/08/03004218/02-SFMOMA-Expansion.jpg"},
    {name: "Balboa Theater", indoor: true, url:"https://www.google.com", photoURL:"https://s.hdnux.com/photos/01/12/12/30/19441191/3/ratio3x2_2400.jpg"}
];

function Suggestion(props) {
    let filteredList = suggestionList.filter(activity => !props.badIdeas.includes(activity.name))
    if (filteredList.length === 0) return (<p>There is nothing left to do in San Francisco.</p>)
    if (props.indoor === true) {
       //filter list to remove outdoor activities
       filteredList = filteredList.filter(activity => activity.indoor === true)
       if (filteredList.length === 0) return (<p>There are no other indoor activities in San Francisco.</p>)
    } else if (props.indoor === false) {
       //filter list to remove indoor activities
       filteredList = filteredList.filter(activity => activity.indoor === false)
       if (filteredList.length === 0) return (<p>There are no other outdoor activities in San Francisco.</p>)
    } else {
       //use entire list, do not modify filteredList
    }

    let randomSelect = Math.floor(Math.random()*(filteredList.length));
    let suggToDo = filteredList[randomSelect];
    return (
        <div>
            <a className="suggestion-name" href={suggToDo.url}>{suggToDo.name}</a>
            <br></br>
            <a href={suggToDo.url}>
               <img className="image" src={suggToDo.photoURL} alt={suggToDo.name}></img>
            </a>
            <br></br>
            <button className="button" onClick={(e) => props.badIdeaToggle(suggToDo.name)}>I don't want to do that.</button>
        </div>
   )
}

export default Suggestion;