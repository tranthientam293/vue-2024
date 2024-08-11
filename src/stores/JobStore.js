import { ref } from "vue";
import { defineStore } from "pinia";
import client from "@/libs";
import { ENDPOINTS } from "@/config";
import { mutation } from "@/utils";

export const useJobStore = defineStore("jobs", () => {
  const jobs = ref([])
  const isLoading = ref(false)

  async function getJobs() {
    try {
      isLoading.value = true
      const res = await client.get(ENDPOINTS.JOBS)
      jobs.value = res.data
    } catch (error) {
      console.log("error", error)
    } finally {
      setTimeout(() => {
        isLoading.value = false
      }, 1000);
    }
  }

  function addNewJob(data, options) {
    mutation({
      fn: async () => await client.post(ENDPOINTS.JOBS, data),
      options
    })
  }

  return {
    jobs,
    isLoading,
    getJobs,
    addNewJob
  }
})

