<template>
  <div>
    <h2>Verification Result</h2>
    <div v-if="user" class="user-data">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>DOB:</strong> {{ user.dob }}</p>
      <p><strong>State:</strong> {{ user.state }}</p>
      <p class="success-message">✅ Aadhaar Verified Successfully!</p>
    </div>
    <div v-else>
      <p class="error-message">No user data found. Please verify again from Home.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    }
  },
  mounted() {
    const data = localStorage.getItem('aadhaar-user')
    if (data) {
      this.user = JSON.parse(data)
    }
  },
  beforeUnmount() {
    localStorage.removeItem('aadhaar-user')
  }
}
</script>
