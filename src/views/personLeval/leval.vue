<template>
  <div>
    {{formCustom}}
    <Form
      :model="formCustom"
      :label-width="80"
    >
      <FormItem
        label="text"
        prop="passwd"
      >
        <Input
          type="text"
          v-model="formCustom.name"
        ></Input>
      </FormItem>
      <FormItem
        label="Confirm"
        prop="passwdCheck"
      >
        <Input
          type="text"
          v-model="formCustom.code"
        ></Input>
      </FormItem>
      <FormItem
        label="Age"
        prop="age"
      >
        <Input
          type="text"
          v-model="formCustom.sex"
          number
        ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // formCustom: {
      //     name: '',
      //     code: '',
      //     sex: ''
      // }
    };
  },
  computed: mapState({
    formCustom: state => {
      const users = localStorage.getItem("userInfo");
      const getUser = JSON.parse(users);
      if (users) {

        return {
          name: getUser.name,
          code: getUser.code,
          sex: getUser.sex
        };
      } else {
        return {
          name: state.user.users.name,
          code: state.user.users.code,
          sex: state.user.users.sex
        };
      }
    }
  })
};
</script>
