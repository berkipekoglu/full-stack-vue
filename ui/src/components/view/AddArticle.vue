<template>
    <div class="m-auto px-6 sm:px-0 sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-4/12 rounded-3xl bg-white mb-4 filter drop-shadow-2xl shadow-xl">
        <div class="text-center py-4 lg:px-4" v-if="success">
            <div class="mx-4 rounded-2xl p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">200</span>
                <span class="font-semibold mr-2 text-left flex-auto">The article has been successfully added in the database. </span>
                <svg @click="close_alert" class="cursor-pointer fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
        </div>
        <div class="relative p-7">
            <span class="font-bold text-gray-700">Add Article</span>
            
            <div class="mt-4">
                <div class="w-full mt-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2">Title</label>
                    <input v-model="article.title" type="text" name="title" id="title" class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-bold" />
                </div>

                <div class="w-full mt-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2">Photo URL</label>
                    <input v-model="article.image" type="text" name="title" id="title" class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-bold" />
                </div>

                <div class="w-full mt-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2">Description</label>
                    <textarea v-model="article.description" name="title" id="title"  class="shadow appearance-none border  border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium" />
                </div>

                <div class="w-full mt-4 flex align-center">
                    <button @click.prevent="post()" class="w-full bg-blue-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-indigo-700 rounded font-['space']">
                        Send Article
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//


import axios from 'axios'
require('dotenv').config()

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

//const url = `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/api`


export default {
    name: 'AddArticle',
    data(){
        return {
            data: {},
            data2: {},
            article: {},
            success: false,
            ip_port : `http://localhost:3001`
        }
    },
    methods: {
        get(){
                let self = this
                axios.get(`${this.ip_port}/api/article`)
                .then(response => {
                    console.log(response)
                    self.data = response.data
                    
                    self.data.reverse()
                    
                    console.log("Refresh çalıştı")
                })
                .catch(error => {
                    console.log(error)
                })
        },
        refresh(){
            this.get()
        },
        post(){
            axios.post(`http://localhost:3001/api/article/create`, this.article)
            .then(response => {
                console.log(response)
                this.refresh()
                this.success = true    
            })
            .catch (err => console.log(err))

            
        },
        patch(id){
            axios.patch(`http://localhost:3001/api/article/${id}/update`, this.article)
        },
        delete(id){
            axios.delete(`http://localhost:3001/api/article/${id}/delete`)
            .then (response => console.log(response))
            .catch (error => console.log(error))
        },

        close_alert(){
            this.success = false
        }
    },
    watch: {
        success(){
            console.log("aksiyon alındı")
            if(this.success) {
                setTimeout(()=> {
                    this.success = false
                }, 2500)
            }
        }
    }
}
</script>