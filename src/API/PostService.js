import axios from "axios";

export default class PostService {
    static async getPosts(type) {
            return (await axios.get(`http://31.184.249.174:3001/get-${type}`)).data
    }

    static async sendOrder(order) {
        await axios.post('http://31.184.249.174:3001/order', order, {
            headers: {
                'Content-Type':'application/json'
            }
        })
    }

    static async deletePost(id) {
        await axios.post('http://31.184.249.174:3001/delete-dosimeter',  {
           id
        }, {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
    }

    static async addPost(post) {
        await axios.post('http://31.184.249.174:3001/add-dosimeter', post, {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
    }

    static async editPost(postId, post) {
        await axios.post('http://31.184.249.174:3001/edit-dosimeter', {postId, post}, {
            headers: {
                'Content-Type':'application/json'
            }
        })
    }
}