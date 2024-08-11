<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import BackButton from '@/components/BackButton.vue';
import { useToast } from 'vue-toastification';
import { useJobDetailStore } from '@/stores/JobDetailStore'
import { ROUTER } from '@/config'

const route = useRoute();
const router = useRouter();
const toast = useToast();

const jobId = route.params.id;
const jobDetailStore = useJobDetailStore(jobId)

jobDetailStore.getJobDetail()

function deleteJob(){
  const confirm = window.confirm("Are you sure your want to delete this jobs?")

  if(confirm){
    jobDetailStore.deleteJob({
      onSuccess:() => {
        toast.success("Job deleted successfully")
        router.push(ROUTER.JOBS)
      },
      onError:(error) => {
        console.log("Error while deleting a job", error)
        toast.error("Job was not deleted")
      }
    })
  }
}

</script>

<template>
  <BackButton :destination="ROUTER.JOBS" />
  <!-- Show loading spinner -->
  <div v-if="jobDetailStore.isLoading" class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>

  <section v-else class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ jobDetailStore.jobDetail.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ jobDetailStore.jobDetail.title }}</h1>
            <div
              class="text-gray-500 mb-4 flex items-center align-middle justify-center md:justify-start"
            >
              <i class="pi pi-map-marker text-orange-700"></i>
              <p class="text-orange-700 ml-2">{{ jobDetailStore.jobDetail.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>

            <p class="mb-4">
              {{ jobDetailStore.jobDetail.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">{{ jobDetailStore.jobDetail.salary }} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div  class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">{{ jobDetailStore.jobDetail.company.name }}</h2>

            <p class="my-2">
              {{ jobDetailStore.jobDetail.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ jobDetailStore.jobDetail.company.contactEmail }}</p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ jobDetailStore.jobDetail.company.contactPhone }}</p>
          </div> 

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              v-bind:to="ROUTER.EDIT_JOB(jobDetailStore.jobDetail.id)"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Edit Job
            </RouterLink>
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              @click="deleteJob"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

</template>
