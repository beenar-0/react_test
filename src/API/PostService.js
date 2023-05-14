import axios from "axios";

export default class PostService {
    static async getAllPosts() {
            return (await axios.get('http://localhost:3001/get-all')).data
    }

    static async deletePost(id) {
        await axios.post('http://localhost:3001/delete-cat',  {
           id
        }, {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
    }

    static async addPost(post) {
        await axios.post('http://localhost:3001/add-cat', post, {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
    }
}