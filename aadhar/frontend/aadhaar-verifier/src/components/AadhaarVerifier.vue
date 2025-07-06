<template>
  <div>
    <input v-model="aadhaar" placeholder="Enter 12-digit Aadhaar" />
    <button @click="verifyAadhaar">Verify</button>
    <p v-if="message" :class="statusClass">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aadhaar: '',
      message: '',
      status: '',
    }
  },
  computed: {
    statusClass() {
      return this.status === 'success' ? 'success-message' : 'error-message'
    }
  },
  methods: {
    async verifyAadhaar() {
      this.message = ''
      try {
        const res = await fetch('http://localhost:5000/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ aadhaar: this.aadhaar })
        })
        const data = await res.json()
        this.status = data.status
        this.message = data.message

        if (data.status === 'success') {
          localStorage.setItem('aadhaar-user', JSON.stringify(data.data))
          this.$router.push('/about')
        }
      } catch (err) {
        this.status = 'error'
        this.message = 'Server not reachable.'
      }
    }
  }
}
</script>
