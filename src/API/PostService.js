import axios from "axios";

export default class PostService {
    static async getAllPosts() {
            return (await axios.get('https://jsonplaceholder.typicode.com/posts')).data
    }
}