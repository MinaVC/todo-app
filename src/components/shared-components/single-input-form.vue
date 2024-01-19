<template>
  <div class="relative z-0 w-full mb-5 group">
    <input
      type="text"
      name="add_task"
      id="add_task"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      v-model="taskName"
    />
    <label
      for="add_task"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {{ input_name }}</label
    >
  </div>
  <div class="flex justify-center">
    <button
      @click.prevent="addTodoItem()"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {{ btn_name }}
    </button>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";

const store = useStore();
const taskName = ref("");
const toast = useToast();
const props = defineProps({
  input_name: {
    type: String,
  },
  btn_name: {
    type: String,
  },
});

// function to generate random ID in this mockup , and we can use UUID if we are working on a big project
function generateRandomId() {
  const randomNum = Math.floor(Math.random() * 1000); // Generate a random number
  return randomNum;
}

const addTodoItem = () => {
  if (taskName.value) {
    var taskToAdd = {
      id: generateRandomId(),
      name: taskName.value,
      done: false,
    };
    store.commit("addTodo", taskToAdd);
    taskName.value = "";
    toast.success("Todo added successfully!");
  } else {
    toast.error("Field is required");
  }
};
</script>
