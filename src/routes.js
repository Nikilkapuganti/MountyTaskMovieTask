
import TopRated from './components/TopRated.vue'
import Upcoming from './components/Upcoming.vue'
export const routes = [
    { path: "/toprated", component: TopRated },
    { path: "/upcoming", component: Upcoming },
    { path: '/', component: TopRated }

]