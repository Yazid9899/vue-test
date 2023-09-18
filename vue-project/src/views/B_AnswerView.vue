

<script>
import axios from 'axios';

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
    handleSubmit() {
      console.log('ASdasdasdas');
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
              <input v-model="form.phone" @change.prevent="handleMobileNumberChange" type="tel" placeholder="Enter Your Mobile Number" pattern="[0-9]*" class="input" size="50">
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

<style>
.main {
  margin: 3rem;
}

.bg-content {
  background-color:beige;
}

.content {
  margin: 1rem;
}

h1 {
  color: green;
}

button:hover {
  cursor: pointer;
}

.job-container {
  display: flex;
  flex-direction: column;
}

.job-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.job-item {
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  color: green;
  padding: 15px;
  width: 40rem;
  border-radius: 10px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
}

.job-title {
  font-weight: bold;
}

.job-button {
  border: 0;
  border-radius: 5px;
  background-color: orange;
  color: white;
  font-size: 15px;
  font-weight: 200;
  margin-top: 0.5rem;
}
.form-row {
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  margin-bottom: 1rem;
}
input {
  border: none;
  border-bottom: 1px rgb(79, 79, 79) solid;
  background-color: transparent;
}

.submit-button {
  border: 0;
  border-radius: 5px;
  background-color: grey;
  color: white;
  font-size: 15px;
  font-weight: 200;
  margin-top: 0.5rem;
}
</style>
