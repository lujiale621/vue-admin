<template>
    <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Password',
                        key: 'password'
                    },
                    {
                        title: 'Phone',
                        key: 'phone'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        password: "18",
                        phone: '15256154'
                    },
                    {
                        name: 'Jim Green',
                        password: "24",
                        phone: '45465131'
                    },
                    {
                        name: 'Joe Black',
                        password: "30",
                        phone: '4564561'
                    },
                    {
                        name: 'Jon Snow',
                        password: "26",
                        phone: '564568416'
                    }
                ]
            }
        },
        mounted(){
             // 向后端发起更新购物车的数据库信息请求
      this.$axios
        .post("/api/user/getuser", {
        })
        .then((res) => {
        console.log(res.data)
        
        })

        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Password：${this.data6[index].password}<br>Phone：${this.data6[index].phone}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>