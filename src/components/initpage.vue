<template>
  <div>
    <div>
      <Row>
        <Col span="8">
          <div style="background: #eee; padding: 3px">
            <Card :bordered="false">
              <p slot="title">PC版商城</p>
              <p>基于iview element-ui的在线商城项目</p>
            </Card>
          </div></Col
        >
        <Col span="8">
          <div style="background: #eee; padding: 3px">
            <Card :bordered="false">
              <p slot="title">移动端商城</p>
              <p>基于vue.js vant的在线商城项目</p>
            </Card>
          </div></Col
        >
        <Col span="8">
          <div style="background: #eee; padding: 3px">
            <Card :bordered="false">
              <p slot="title">前后端API文档</p>
              <p>详细介绍，调试后端接口</p>
            </Card>
          </div></Col
        >
      </Row>
    </div>
    <div class="aliet">
      <Row>
        <Col span="8">
          <div
            style="background: #eee; padding: 0px; border: 1px solid #dcdfe6"
          >
            <Card :bordered="false">
              <div class="itcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-bianminshenghuo" />
                </svg>
                <h4 class="font">今日订单总数 200</h4>
              </div>
            </Card>
          </div></Col
        >

        <Col span="8">
          <div
            style="background: #eee; padding: 0px; border: 1px solid #dcdfe6"
          >
            <Card :bordered="false">
              <div class="itcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qushi" />
                </svg>
                <h4 class="font">今日销售总额 ￥5000.00</h4>
              </div>
            </Card>
          </div></Col
        >
        <Col span="8">
          <div
            style="background: #eee; padding: 0px; border: 1px solid #dcdfe6"
          >
            <Card :bordered="false">
              <div class="itcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jinrongketang" />
                </svg>
                <h4 class="font">昨日销售总额 ￥1000.00</h4>
              </div>
            </Card>
          </div></Col
        >
      </Row>
    </div>
    <div>
      <Row>
        <Col span="24">
          <div style="background: #eee; padding: 3px">
            <Card :bordered="false">
              <p slot="title">待处理事务</p>
              <p>暂无未处理订单</p>
            </Card>
          </div></Col
        >
      </Row>
    </div>
    <div>
      <Row>
        <Col span="24">
          <div style="background: #eee; padding: 3px">
            <Card :bordered="false">
              <p slot="title">商品总览</p>
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="out-border">
                    <div class="layout-title">商品总览</div>
                    <div style="padding: 40px">
                      <el-row>
                        <el-col
                          :span="6"
                          class="color-danger overview-item-value"
                          >100</el-col
                        >
                        <el-col
                          :span="6"
                          class="color-danger overview-item-value"
                          >400</el-col
                        >
                        <el-col
                          :span="6"
                          class="color-danger overview-item-value"
                          >50</el-col
                        >
                        <el-col
                          :span="6"
                          class="color-danger overview-item-value"
                          >500</el-col
                        >
                      </el-row>
                      <el-row class="font-medium">
                        <el-col :span="6" class="overview-item-title"
                          >已下架</el-col
                        >
                        <el-col :span="6" class="overview-item-title"
                          >已上架</el-col
                        >
                        <el-col :span="6" class="overview-item-title"
                          >库存紧张</el-col
                        >
                        <el-col :span="6" class="overview-item-title"
                          >全部商品</el-col
                        >
                      </el-row>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="out-border">
                    <div class="layout-title">用户总览</div>
                    <div style="padding: 40px">
                      <el-row>
                        <el-col
                          :span="6"
                          class="color-danger overview-item-value"
                          >100</el-col
                        >
                        <el-col
                          :span="6"
                          class="color-danger overview-item-value"
                          >200</el-col
                        >
                        <el-col
                          :span="6"
                          class="color-danger overview-item-value"
                          >1000</el-col
                        >
                        <el-col
                          :span="6"
                          class="color-danger overview-item-value"
                          >5000</el-col
                        >
                      </el-row>
                      <el-row class="font-medium">
                        <el-col :span="6" class="overview-item-title"
                          >今日新增</el-col
                        >
                        <el-col :span="6" class="overview-item-title"
                          >昨日新增</el-col
                        >
                        <el-col :span="6" class="overview-item-title"
                          >本月新增</el-col
                        >
                        <el-col :span="6" class="overview-item-title"
                          >会员总数</el-col
                        >
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </Card>
          </div></Col
        >
      </Row>
    </div>
          <div>
            <div id="echarts-dom" class="chart"></div>
          </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["利润", "支出", "收入"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "value",
          },
        ],
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        series: [
          {
            name: "利润",
            type: "bar",
            label: {
              show: true,
              position: "inside",
            },
            emphasis: {
              focus: "series",
            },
            data: [200, 170, 240, 244, 200, 220, 210],
          },
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 341, 374, 390, 450, 420],
          },
          {
            name: "支出",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "left",
            },
            emphasis: {
              focus: "series",
            },
            data: [-120, -132, -101, -134, -190, -230, -210],
          },
        ],
      },
    };
  },
  mounted() {this.drawLine();},
  methods: {
    drawLine() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("echarts-dom")); // 绘制图表
      console.log(this.option.series);
      myChart.setOption(this.option);
    },
  },
};
</script>
<style scoped>
.itcon {
  text-align: center;
}
.aliet {
  padding: 15px 0px;
}
.chart {
  width: 100%;
  height: 230px;
}

.app-container {
  margin-top: 40px;
  margin-left: 120px;
  margin-right: 120px;
}

.total-layout {
  margin-top: 20px;
}

.total-frame {
  border: 1px solid #dcdfe6;
  padding: 20px;
  height: 100px;
}

.total-icon {
  color: #409eff;
  width: 60px;
  height: 60px;
}

.total-title {
  position: relative;
  font-size: 16px;
  color: #909399;
  left: 70px;
  top: -50px;
}

.total-value {
  position: relative;
  font-size: 18px;
  color: #606266;
  left: 70px;
  top: -40px;
}

.un-handle-layout {
  margin-top: 20px;
  border: 1px solid #dcdfe6;
}

.layout-title {
  color: #606266;
  padding: 15px 20px;
  background: #f2f6fc;
  font-weight: bold;
}

.un-handle-content {
  padding: 20px 40px;
}

.un-handle-item {
  border-bottom: 1px solid #ebeef5;
  padding: 10px;
}

.overview-layout {
  margin-top: 20px;
}

.overview-item-value {
  font-size: 24px;
  text-align: center;
}

.overview-item-title {
  margin-top: 10px;
  text-align: center;
}

.out-border {
  border: 1px solid #dcdfe6;
}

.statistics-layout {
  margin-top: 20px;
  border: 1px solid #dcdfe6;
}
.mine-layout {
  position: absolute;
  right: 140px;
  top: 107px;
  width: 250px;
  height: 235px;
}
.address-content {
  padding: 20px;
  font-size: 18px;
}
</style>