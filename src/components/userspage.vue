<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
import qs from 'qs'

export default {
  data() {
    return {
      columns7: [
        {
          title: "User_id",
          key: "user_id",
        },
        {
          title: "Username",
          key: "username",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person",
                },
              }),
              h("strong", params.row.username),
            ]);
          },
        },
        {
          title: "Password",
          key: "password",
        },
        {
          title: "Phone",
          key: "phone",
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    },
                  },
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    },
                  },
                },
                "Delete"
              ),
            ]);
          },
        },
      ],
      data6: [
        {
          username: "John Brown",
          password: "18",
          userphonenumber: "15256154",
        },
        {
          username: "Jim Green",
          password: "24",
          userphonenumber: "45465131",
        },
        {
          username: "Joe Black",
          password: "30",
          userphonenumber: "4564561",
        },
        {
          username: "Jon Snow",
          password: "26",
          userphonenumber: "564568416",
        },
      ],
    };
  },
  mounted() {
    // 向后端发起更新购物车的数据库信息请求
    this.$axios.post("/api/user/getuser", {}).then((res) => {
      this.data6 = res.data;
    });
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Username：${this.data6[index].username}<br>Password：${this.data6[index].password}<br>Phone：${this.data6[index].userphonenumber}`,
      });
    },
    remove(index) {
        
      // 向后端发起更新购物车的数据库信息请求 // ?user_id=5
      this.$axios
        .post("/api/user/deleteusebyid", 
        // {
        //     user_id: parseInt(this.data6[index].user_id)
        // }
            qs.stringify({
                user_id: parseInt(this.data6[index].user_id)
            })
        )
        .then((res) => {});
    },
  },
};
</script>