import {ref} from "vue";
import { useRequest } from "vue-request";
import axios from "axios";

const dogs = ref([
        
]);
const api = axios.create({
    baseURL: "https://dog.ceo/api/breeds/image/random",
});

const getRandomDogs = () => {
    return api.get("/");
}



    const useDogs = () => {
    const { data } = useRequest(getRandomDogs);
    dogs.value.push(data?.slip?.dogs)
    return { dogs };
};
export default useDogs();
