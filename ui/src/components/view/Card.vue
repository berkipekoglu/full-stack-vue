<template>
  <div class="m-auto px-6 sm:px-0 sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
      <div class="relative group mb-4" v-for="article, key in data" :key="key">
          <div role="hidden" class="absolute inset-0 w-full h-full rounded-3xl bg-white transition duration-300 shadow-xl group-hover:scale-105"></div>
          <div class="relative p-6 gap-6 flex flex-wrap sm:flex-nowrap">
              <div class="sm:w-5/12">
                  <img :src="article.image" alt="" class="w-full h-full object-cover rounded-2xl">
              </div>

              <div class="sm:w-7/12 space-y-4">
                  <h4 class="text-2xl font-bold text-gray-700">{{ article.title }}</h4>

                  <p class="text-gray-600">{{ article.description }}</p>

                  <span class="block px-4 py-2 bg-yellow-100 text-sm  text-yellow-700 rounded-xl font-medium">{{ article.created_at }}</span>

                  <div class="pt-4 border-t flex gap-4">
                      <img src="../../assets/img/avatar.jpeg" alt="" class="w-10 h-10 object-cover rounded-full">

                      <div class="w-full ">
                          <h6 class="text-base font-semibold text-gray-600">Berk İpekoğlu</h6>

                          <span class="block text-xs tracking-wide text-gray-500">Developer</span>

                          <div class="flex align-center justify-end cursor-pointer" @click="edit">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'Card',
  data(){
      return {
          data: null,
          article: null,
          ip_port : `http://localhost:3001`
      }
  },
  created(){
      this.get()
  },
  methods: {
      get(){
            let self = this
            console.log(this.data2)
            axios.get(`${this.ip_port}/api/article`)
            .then(response => {
                self.data = response.data
                self.data.reverse()
               
            }) 
      },
      edit(){
          
      }
  },
  watch: {
      data(){
          console.log("watch")
      }
  }
}
</script>


<style scoped>

</style>
