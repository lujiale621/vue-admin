<style scoped>
.layout {
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"><img src="../assets/logo.png" alt="" /></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              登录
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              移动端
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              API文档
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              github
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <Menu
            active-name="1-2"
            theme="light"
            width="auto"
            :open-names="['1']"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                首页
              </template>
              <MenuItem name="1-1" :to="{ path: '/home/initpage' }">发现</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                商品
              </template>
              <MenuItem name="2-1" :to="{ path: '/home/productpage' }">商城列表</MenuItem>
              <MenuItem name="2-2">添加商品</MenuItem>
              <MenuItem name="2-3">商品分类</MenuItem>
              <MenuItem name="2-4">商品类型</MenuItem>
              <MenuItem name="2-5">品牌管理</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                订单
              </template>
              <MenuItem name="3-1">订单列表</MenuItem>
              <MenuItem name="3-2">订单设置</MenuItem>
              <MenuItem name="3-3">退货申请处理</MenuItem>
              <MenuItem name="3-4">退货原因设置</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                营销
              </template>
              <MenuItem name="4-1">广告列表</MenuItem>
              <MenuItem name="4-2">品牌推荐</MenuItem>
              <MenuItem name="4-3">新品推荐</MenuItem>
              <MenuItem name="4-4">秒杀活动列表</MenuItem>
            </Submenu>
            <Submenu name="5">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                权限
              </template>
              <MenuItem name="5-1" :to="{ path: '/home/userspage' }">用户</MenuItem>
              <MenuItem name="5-2" :to="{path: '/home/resourcepage'}">资源列表</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>{{$router.params}}</BreadcrumbItem>
          </Breadcrumb>
          <Content
            :style="{ padding: '24px', minHeight: '700px', background: '#fff' }"
          >
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {};
</script>