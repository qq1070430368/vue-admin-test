<template>
  <div>
    我是个人中心页面
    <Button type="success" ghost @click="getUses">获取结果</Button>
    {{userMessage.message}}
  </div>
</template>
<script>
import API from "./urlPort.js";
export default {
  data() {
    return {
      userMessage: {}
    };
  },
  methods: {
    getUses() {
      let that = this;
      API.login({
        userName: "haiqing",
        password: "5201314"
      })
        .then(response => {
          if (response.data) {
            that.userMessage = response.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    let that = this;
    API.getUser()
      .then(function(response) {
        if (response.data) {
          //   将用户信息保存至store中
          console.log(that.$store, "vuex");
          that.$store.dispatch('user/getUsersStore', {user: response.data});
        }
      })
      .catch(function(err) {
        console.log(err);
        // new Promise.reject(err);
        return false;
      });
  }
};
</script>