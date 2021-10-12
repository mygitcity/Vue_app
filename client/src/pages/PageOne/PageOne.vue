<template>
  <div class="center-container">
    <div class="form-item">
      <label class="label-item" for="email">Email</label>
      <div class="main-content">
        <b-form-input id="email" v-model="email" placeholder="Enter your email"></b-form-input>
      <b-button v-if="!isSubmit" variant="success" class="btn" @click="onSubmit">Submit</b-button>
      <b-button v-else variant="outline-primary" class="btn" @click="onCopyLink">Copy link</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import UsersAPI from '../../api/UsersAPI'
export default {
  name: 'PageOne',
  data () {
    return {
      email: '',
      isSubmit: false,
      randomId: ''
    }
  },
  methods: {
    onSubmit() {
      this.randomId = this.generateUID();
      UsersAPI.craete({
        email: this.email,
        id: this.randomId
      }).then(rs => {
        if(rs) {
          this.$bvToast.toast('Toast body content', {
            title: `Variant success`,
            variant: 'success',
            solid: true,
            
          })
          this.isSubmit = true;
        }
      })
    },
    onCopyLink() {
      navigator.clipboard.writeText(`http://localhost:8080/#/app/${this.randomId}`)
    },
    generateUID() {
      var firstPart = (Math.random() * 46656) | 0;
      var secondPart = (Math.random() * 46656) | 0;
      var thirdPart = (Math.random() * 46656) | 0;

      firstPart = ("000" + firstPart.toString(36)).slice(-3);
      secondPart = ("000" + secondPart.toString(36)).slice(-3);
      thirdPart = ("000" + secondPart.toString(36)).slice(-4);
      return firstPart + secondPart + thirdPart;
    }
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
