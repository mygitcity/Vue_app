<template>
  <div class="center-container">
    <div class="form-item">
      <h2>
        {{ dataShow }}
      </h2>
    </div>
  </div>
</template>
<script>
import UsersAPI from '../../api/UsersAPI'
export default {
  name: 'PageTwo',
  data () {
    return {
      dataShow: 'Access Denied'
    }
  },
  mounted() {
    UsersAPI.confirmId(this.$route.params.randomId).then(rs => {
      console.log(rs)
      if(rs.data[0].email) {
        this.dataShow = rs.data[0].email
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-item {
  width: 350px;
  display: flex;
  flex-direction: column;
}

.label-item {
  font-weight: bold;
}

.main-content {
  display: flex;
}

.btn {
  width: 125px;
}
</style>
