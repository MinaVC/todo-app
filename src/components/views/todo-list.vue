<template>
  <div class="container p-2">
    <div
      class="flex flex-col justify-center align-center place-items-center h-screen"
    >
      <div
        class="xs:text-3xl lg:text-5xl font-bold text-center text-blue-900 underline mb-10"
      >
        TASK TO-DO
      </div>
      <div class="lg:w-1/2 md:w-2/3 xs:w-full my-10">
        <single-input-form input_name="Task" btn_name="ADD TASK" />
      </div>
      <div class="lg:w-3/5 md:w-4/5 xs:w-full">
        <list-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import singleInputForm from "../shared-components/single-input-form";
import listView from "../shared-components/list-view.vue";
</script>
