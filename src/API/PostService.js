import axios from "axios";

export default class PostService {
    static async getPosts(type) {
            return (await axios.get(`https://shrouded-retreat-68754.herokuapp.com/get-${type}`)).data
    }

    static async sendOrder(order) {
        await axios.post('https://shrouded-retreat-68754.herokuapp.com/order', order, {
            headers: {
                'Content-Type':'application/json'
            }
        })
    }

    static async deletePost(id) {
        await axios.post('https://shrouded-retreat-68754.herokuapp.com/delete-cat',  {
           id
        }, {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
    }

    static async addPost(post) {
        await axios.post('https://shrouded-retreat-68754.herokuapp.com/add-cat', post, {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
    }

    static async editPost(postId, post) {
        await axios.post('https://shrouded-retreat-68754.herokuapp.com/edit-cat', {postId, post}, {
            headers: {
                'Content-Type':'application/json'
            }
        })
    }
}