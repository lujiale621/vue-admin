<template>
  <div>
    <div class="title">
      <el-tabs>
        <el-tab-pane label="商品管理" name="first">商品管理</el-tab-pane>
      </el-tabs>
    </div>
    <div class="body">
      <Table :columns="columns11" :data="data10" border height="700"></Table>
    </div>
    <div class="foot">
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: "",
      columns11: [
        {
          title: "商品名称",
          key: "name",
          align: "center",
          width: 200,
          fixed: "left",
          filters: [
            {
              label: "Joe",
              value: 1,
            },
            {
              label: "John",
              value: 2,
            },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.name === "Joe";
            } else if (value === 2) {
              return row.name === "John Brown";
            }
          },
        },
        {
          title: "Other",
          align: "center",
          children: [
            {
              title: "商品数量",
              key: "age",
              align: "center",
              width: 200,
              sortable: true,
            },
            {
              title: "简介",
              align: "center",
              children: [
                {
                  title: "商品描述信息",
                  key: "street",
                  align: "center",
                  width: 200,
                },
                {
                  title: "Block",
                  align: "center",
                  children: [
                    {
                      title: "商品标题",
                      key: "building",
                      align: "center",
                      width: 200,
                      sortable: true,
                    },
                    {
                      title: "价格",
                      key: "door",
                      align: "center",
                      width: 200,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Company",
          align: "center",
          children: [
            {
              title: "售出数量",
              key: "caddress",
              align: "center",
              width: 200,
            },
            {
              title: "商品ID",
              key: "cname",
              align: "center",
              width: 200,
            },
          ],
        },
        {
          title: "图片路径",
          key: "gender",
          align: "center",
          width: 200,
          fixed: "right",
        },
      ],
      data10: [],
    };
  },
  mounted() {
    this.getallproduct();

        },
  methods: {
    getallproduct() {
      this.$axios.post("/api/product/getproducts", {}).then((res) => {
        this.products = res.data;
        console.log(this.products);
            const data = [];
            for (let i = 0; i < 20; i++) {
                data.push({
                    key: this.products[i].category_id,  
                    name: this.products[i].product_name, 
                    age: this.products[i].product_num,
                    street: this.products[i].product_intro,
                    building: this.products[i].product_title,
                    door:  this.products[i].product_price,
                    caddress: this.products[i].product_sales,
                    cname: this.products[i].product_id,
                    gender:  this.products[i].product_picture,
                });
            }
            this.data10 = data;
      });
    },
  },
};
</script>
<style scoped>
</style>