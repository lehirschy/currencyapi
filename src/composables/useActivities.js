import {ref} from "vue";
import { useRequest } from "vue-request";
import axios from "axios";

const activities = ref([
        
]);
const api = axios.create({
    baseURL: "http://www.boredapi.com/api/activity/",
    
    
});





const getRandomActivities = async () => {
  const res = await api.get();
  if (res.status === 200) {
    activities.value = [res.data.slip];
  }
};

export const useActivities = () => {
  getRandomActivities();
  const search = async (searchItem) => {
    const res = await api.get(`search/${searchItem}`);
  
    if (res.status === 200) {
      activities.value = res.data.slips;
    }
  };
  return { activities, search };
};

export default useActivity = useActivities();



