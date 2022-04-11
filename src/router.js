import { createRouter, createWebHistory} from "vue-router";
import Index from "./pages/index.vue";
import Activity from "./pages/activities.vue";
import NotFound from "./pages/404.vue";



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