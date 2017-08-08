<template>
  <div>
    <p>  Contact me:xiao_cl@foxmail.com</p>
    <div class="suno-resume">
      <p>个人简况 | Profile：</p>
      <p>性别： 男</p>
      <p>年龄： 23 岁</p>
      <p>专业： 电子科技大学(985 211)-信息对抗技术</p>
      <p>简介：</p>
      <p>于2015年7月毕业于电子科技大学，后接触前端并在2016年加入成都清数科技公司，开始前端开发工程师之路。</p>
      <p>通过CET-6，能通过技术书籍及英文官方文档学习新的技术框架。</p>
      <p>熟悉es6/7，Webpack Gulp构建。</p>
      <p>熟悉React,Vue,Angular1等框架，熟练使用git等工具</p>
      <p>技能 | Skills</p>
      <p>通过 CET-6，具有简单日常交流的英语能力，能够读懂英文技术文档</p>
      <p>掌握 HTML 和 CSS，掌握 Javascript，AngularJs, 了解 ES6 语法，Less,Sass 预处理框架,了解 React。</p>
      <p>熟悉前端模块化开发，了解基本的前端性能优化。</p>
      <p>了解 C，Java，Scala。了解 NodeJs+Express。</p>
      <p>熟悉命令行操作以及 vim 操作。会使用 Git 进行多人协作。熟练运用 Photoshop 切图。</p>
      <p>个人项目 | Projects</p>
      <a href="http://t.cn/RKeXt9b">http://t.cn/RKeXt9b</a>
      <p>使用原生JavaScript完整实现一个前端项目的编写。熟悉前端技术，并将其运用于产品实践：包括阅读交互、视觉稿，练习页面制作、js交互、通讯、SEO、规范、代码优化等</p>
      <p>http://t.cn/RKeXSZa</p>
      <p>使用Vuejs构建的个人博客</p>
      <p>工作经历 | Work Experience</p>
      <p>成都清数科技有限公司  前端开发工程师   2016.06 — 2016.11技术栈： Angularjs Zrender Less Gulp</p>
      <p>作为项目的主要参与者，和另一前端工程师协同完成整个项目前端部分，负责包括页面编写，js 代码的依赖处理。引进 less 预处理器对样式进行优化。部分页面使用 jade 重构。gulp 编译流程优化。
        iconfont 引入替代因为前期快捷开发而使用 FontAwesome 的 icon.同时也独立修改了部分后端接口(scala+play2)，以适应前端对数据的需求。</p>
      <p>东方国信科技有限公司 前端开发工程2016.12 — 至今</p>
      <p>技术栈： Vuejs Echarts Sass Gulp</p>
      <p>参与BI的设计与前端开发。研究D3的在大数据可视化中的实现。</p>
    </div>
  </div>
</template>

<script>


  export default {
    data () {
      return {

      }
    },
    mounted () {
    },
    computed: {

    },
    methods: {

    },
    components: {

    }
  }
</script>

<style>
  #wrapper {
    margin: 0 auto;
  }
  .suno-resume{
    padding: 10px;
  }
  h1 {
    color: white;
    text-align: center;
  }

  .icon-huojian {
    font-size: 2.5rem;
    color: #C0CCDA;
    position: fixed;
    bottom: 1.25rem;
    right: 2.5rem;
    cursor: pointer;
    transition: 1s;

  }

  .totop {
    bottom: 31.25rem;
    transition: 1s;
  }

  @media screen and (max-width: 440px) {
    .icon-huojian {
      right: 0.5rem;
    }
  }
</style>
