
<!-- this is the way of using options api -->
<script>
  export default {
    data(){
      return{
        name: "Ramya Lakhani", //name is the variable
        status: 'pending',
        tasks: [
          'task 1',
          'task 2',
          'task 3',
          'task 4',
          'task 5'
        ],
        link: 'https://www.google.com/'
      }
    },
    methods:{
      toggleStatus(){
        if(this.status == 'active'){
          this.status = 'pending'
        }else if (this.status == 'pending'){
          this.status = 'inactive';
        }else {
          this.status = 'active';
        }
      }
    }
  }
</script>

<template>
  <h1>Vue Jobs</h1>

  <!-- here is how we can use the data variables -->
   <h1>Welcome, {{  name }}</h1>


   <!-- the directives start from  -->

   <!-- if else if else -->
    <p v-if="status === 'active'"> User is active </p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>

    <!-- for - in  loop -->
     <h3>Tasks:</h3>
     <ul>
        <li v-for="task in tasks" :key="task">{{ task }}</li>
     </ul>

     <!-- bind= a piece of data into attribute -->
      <!-- way 1  -->
          <!-- <a v-bind:href="link">Click to go to the google</a> -->
      <!-- way 2  -->
          <a :href="link">Click to go to the google</a>
      

     <!-- v-on  -->
        <!-- way 1 -->
            <!-- <button v-on:click="toggleStatus">Change status</button> -->
        <!-- way 2 -->
            <button @click="toggleStatus">Change status</button>


</template>