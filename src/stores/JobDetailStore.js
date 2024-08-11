import { ref } from "vue";
import { defineStore } from "pinia";
import client from "@/libs";
import { ENDPOINTS } from "@/config";
import { mutation } from "@/utils";

export const useJobDetailStore = (jobId) => defineStore(`job-detail-${jobId}`, () => {
  const jobDetail = ref({})
  const isLoading = ref(false)

  async function getJobDetail() {
    isLoading.value = true
    try {
      const res = await client.get(ENDPOINTS.JOB_DETAIL(jobId))
      jobDetail.value = res.data
    } catch (error) {
      console.log("error", error)
    } finally {
      setTimeout(() => {
        isLoading.value = false
      }, 1000);
    }
  }

  function deleteJob(options) {
    mutation({
      fn: async () => await client.delete(ENDPOINTS.JOB_DETAIL(jobId)),
      options
    })
  }

  function editJob(data, options) {
    mutation({
      fn: async () => await client.put(ENDPOINTS.JOB_DETAIL(jobId), data),
      options
    })
  }

  return {
    jobDetail,
    isLoading,
    getJobDetail,
    deleteJob,
    editJob
  }
})()

