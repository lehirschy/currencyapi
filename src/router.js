import { createRouter, createWebHistory} from "vue-router";
import Index from "./pages/index.vue";
import NotFound from "./pages/404.vue";
import Activity from "./composables/useActivities.js";



const routes = [{
    path: "/",
    name: "Index",
    component: Index,
},
{
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
},
{
    path:"/api/activity/",
    name: "Activity",
    component: Activity,
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;