<script>
import axios from 'axios';
import '../styles/B_AnswerView.css'
export default {
  data() {
    return {
      data: "",
      job: "",
      form: {
        displayName: "",
        subject: "",
        email: "",
        phone: "",
        message: "",
        ptJObApplyType: "APPLICATION",
        isActive: false,
        ptJobPost: {
          id: 1
        }
      }
    };
  },
  methods: {
    async fetchData() {
      try {
        const proxyUrl = 'https://cors-proxy.fringe.zone/';
        const url = 'https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth';
        const response = await axios.get(proxyUrl + url);

        if (response.status === 200) {
          this.data = response.data;
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    },
    seeDetail(id) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id === id) {
          this.job = this.data[i];
          this.form.subject = this.job.title
          break;
        }
      }
    },

    handleMobileNumberChange(event) {
      event.target.value = event.target.value.replace(/\D/g, '');
    },

    async handleSubmit() {
      try {
        const proxyUrl = 'https://cors-proxy.fringe.zone/';
        const url = "https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth"

        const response = await axios.post(proxyUrl + url, this.form)

        console.log(response);
      } catch (error) {
        console.log(error);
      }

    }
  },
  created() {
    this.fetchData();
  },
  computed: {
    rowData() {
      const itemsPerRow = 2;
      const rows = [];
      for (let i = 0; i < this.data.length; i += itemsPerRow) {
        const row = {
          id: i,
          jobs: this.data.slice(i, i + itemsPerRow),
        };
        rows.push(row);
      }
      return rows;
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="job-container">
      <div class="job-row" v-for="row in rowData" :key="row.id">
        <div v-for="job in row.jobs" :key="job.id" class="job-item">
          <div class="job-title">{{ job.title }}</div>
          <button class="job-button" @click.prevent="seeDetail(job.id)">See job</button>
        </div>
      </div>
    </div>
    <div class="bg-content">
      <div class="content">
        <h1>{{ job.title }}</h1>
        <div v-html="job?.description?.txt"></div>
        <h3>Send Your Job Application</h3>
        <form @submit.prevent="handleSubmit()">
          <div class="form-row">
            <div>
              <div class="input-title"><strong>Your Name</strong></div>
              <input v-model="form.displayName" type="text" placeholder="Enter Your Name" class="input" size="50">
            </div>
            <div>
              <div class="input-title"><strong>Mobile Number</strong></div>
              <input v-model="form.phone" @change.prevent="handleMobileNumberChange" type="tel"
                placeholder="Enter Your Mobile Number" pattern="[0-9]*" class="input" size="50">
            </div>
          </div>
          <div class="form-row">
            <div>
              <div class="input-title"><strong>Email Address</strong></div>
              <input v-model="form.email" type="email" placeholder="Enter Your Email" class="input" size="50">
            </div>
            <div>
              <div class="input-title"><strong>Write Your Message...</strong></div>
              <input v-model="form.message" type="text" placeholder="Enter Your Message" class="input" size="50">
            </div>
          </div>
          <div class="input-title"><strong>File</strong></div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>
