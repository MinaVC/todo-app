import { createRouter, createWebHistory } from "vue-router";
import todo from "../components/views/todo-list";

const routes = [{ path: "/", component: todo, name: todo }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
