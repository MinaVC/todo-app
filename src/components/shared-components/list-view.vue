<template>
  <div v-if="updatedTodoList.length > 0">
    <ul>
      <li
        class="flex p-3 justify-between items-center border-b-2 border-lime-600"
        v-for="(item, index) in updatedTodoList"
        :key="item.id"
      >
        <div class="flex">
          <input
            type="checkbox"
            class="mx-2"
            v-model="item.done"
            checked="item.done"
            @change="taskIsDone(item.id, index, item.done)"
          />
          <div
            class="text-xl font-bold m-2"
            :class="item.done ? 'line-through' : ''"
          >
            {{ item.name }}
          </div>
        </div>
        <i
          class="icon-bin text-red-600 cursor-pointer"
          @click="deleteItem(item.id)"
        ></i>
      </li>
    </ul>
  </div>
  <div v-else>
    <div
      class="flex text-center font-bold text-xl py-8 px-4 text-green-900 justify-center items-center border-2 border-green-700 rounded-lg"
    >
      All caught up! There are no outstanding tasks on your to-do list.
    </div>
  </div>
</template>
<script setup>
import { defineProps, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";

const store = useStore();
const toast = useToast();
const props = defineProps({
  items: {
    type: Array,
  },
});

onMounted(async () => {
  await store.dispatch("getListOfTodo");
});

// listen on list of todo
const updatedTodoList = computed(() => {
  return store.getters.updateTodoList;
});

const deleteItem = (id) => {
  store.commit("deleteTodoItem", id);
  toast.error("To-do Takedown !!");
};

const taskIsDone = async (id, index, itemIsDone) => {
  const payload = {
    id,
    isDone: itemIsDone,
    index,
  };
  toast.success("Good job !! To-do done successfully ");

  await store.commit("taskIsDone", payload);
};

// listOfTodo
</script>
