import { ref } from 'vue'
import { useRequest } from 'vue-request'
import axios from 'axios'

const activity = ref()
const participants = ref()

const api = axios.create({
  baseURL: 'http://www.boredapi.com/api/activity/',
})

const useActivities = () => {
  const getRandomActivities = async () => {
    const res = await api.get()
    activity.value = res.data
  }

  const getParticipants = async numberOfParticipants => {
    const res = await api.get('/', {
      params: { participants: numberOfParticipants },
    })
    activity.value = res.data
  }
  getRandomActivities()

  return { participants, activity, getRandomActivities, getParticipants }
}

export default useActivities
