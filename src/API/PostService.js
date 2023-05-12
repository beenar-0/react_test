import axios from "axios";

export default class PostService {
    static async getAllPosts() {
        try {
            return (await axios.get('https://jsonplaceholder.typicode.com/posts')).data
        }
        catch (e) {
            console.log(e)
        }

    }
}