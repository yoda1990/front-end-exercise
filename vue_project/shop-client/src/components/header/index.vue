<template>
  <header class="header">
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <a href="/login">登录</a>
            <a href="/register">免费注册</a>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <a class="logo" title="尚品汇" href="###" target="_blank">
          <!-- <img src="./images/logo.png" alt />  -->
        </a>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <!--  -->
          <!--  -->
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="search">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.keyword}`)
    },
  },
  mounted() {
    // 通过全局总线绑定removeKeyword事件监听
    this.$bus.$on('removeKeyword', () => {
      this.keyword = '' // 置空我们的搜索关键字
    })
  },

  toSearch() {
    // 得到当前的请求路径和query参数对象
    const { path, query } = this.$route
    if (this.keyword) {
      // 如果当前在搜索页面, 需要携带params和query参数
      if (path.indexOf('/search') === 0) {
        this.$router.push({
          name: 'search',
          params: { keyword: this.keyword },
          query,
        }) // 可以
      } else {
        // 如果不在, 只需要携带params参数
        this.$router.push({ name: 'search', params: { keyword: this.keyword } }) // 可以
      }
    } else {
      if (path.indexOf('/search') === 0) {
        this.$router.push({ name: 'search', query })
      } else {
        this.$router.push({ name: 'search' })
      }
    }
  },
}
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .loginList {
        float: left;
        p {
          float: left;
          margin-right: 10px;
          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }
      .typeList {
        float: right;
        a {
          padding: 0 10px;
          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>