<!-- composition api way -->

<!-- way 1 -->
<!-- 
<script>
// to make variables reactive 
import {ref} from 'vue';

  export default{
    setup(){
      const name = ref('Ramya Lakhani');
      const status = ref('pending');
      const tasks = ref(['Task 1', 'Task 2', 'Task 3']);



      const toggleStatus = () => {
        if(status.value === 'active'){
          // because of the variable is now reactive we should use .value rather than this.status
          status.value = 'pending';
        }else if(status.value === 'pending'){
          status.value = 'inactive';
        }else{
          status.value = 'active';
        }
      }
      return {
        name,
        status, 
        tasks,
        toggleStatus,  // this is a method that we can use in the template
      }
    }

  }
</script> -->

<!-- way 2 -->
<script setup>
  import {ref, onMounted} from 'vue';

  const name = ref('Ramya Lakhani');
      const status = ref('pending');
      const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
      // for maining state
      const newTask = ref('');


      const toggleStatus = () => {
        if(status.value === 'active'){
          // because of the variable is now reactive we should use .value rather than this.status
          status.value = 'pending';
        }else if(status.value === 'pending'){
          status.value = 'inactive';
        }else{
          status.value = 'active';
        }
      }

      const addTask = () =>{
        if(newTask.value.trim() !== ''){
          tasks.value.push(newTask.value);
          newTask.value = '';
        }
      }

      const deleteTask = (index) => {
        tasks.value.splice(index, 1);
      }

      onMounted(async () => {
        try{
          const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
          const data = await res.json();
          tasks.value = data.map(task => task.title);
        }catch(error){
          console.log(error);
        }
      })
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
        <li v-for="(task, index) in tasks" :key="task"><span><button @click="deleteTask(index)">d</button>{{ task }}         </span>
        </li>
     </ul>

     <!-- v-on  -->
        <!-- way 1 -->
            <!-- <button v-on:click="toggleStatus">Change status</button> -->
        <!-- way 2 -->
            <button @click="toggleStatus">Change status</button>

      <!-- forms -->
       <form @submit.prevent="addTask">
          <label for="newTask">Add Task:</label>
          <!-- v-modal directive -->
          <input type="text" id="newTask" name="newTask" v-model="newTask">
          <button type="submit">Add Task</button>
       </form>

</template>