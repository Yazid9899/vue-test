import { createRouter, createWebHistory } from "vue-router";
import A_AnswerView from "../views/A_AnswerView.vue";
import B_AnswerView from "../views/B_AnswerView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/a-answer",
      name: "a-answer",
      component: A_AnswerView,
    },
    {
      path: "/b-answer",
      name: "b-answer",
      component: B_AnswerView,
    },
  ],
});

export default router;
