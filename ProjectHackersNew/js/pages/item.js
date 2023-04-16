import view from "../utils/view.js";
import url from '../utils/baseUrl.js'
import Story from "../component/Story.js";
import Comment from "../component/Comment.js";
export default async function Item() {
    let story = null
    let hasComments = false
    let hasError = false

    try {
        story = await getStory();
        hasComments = story.comments.length > 0;
    } catch (error){
        hasError = true
        console.log(error)
    }

    if (hasError) {
        view.innerHTML =  `<div class="error">Error fetching story</div>`;
    }

    view.innerHTML= `<div>${Story(story)}</item><hr/>${hasComments ?
                    story.comments.map(comment => 
                    Comment(comment)).join('') : 'No Comments'}`

}




async function getStory() {
    const sotyId = window.location.hash.split('?id=')[1];
    const response = await fetch(`${url}/item/${sotyId}`);
    const story = response.json()
    return story
}