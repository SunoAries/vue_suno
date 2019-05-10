webpackJsonp([3,6],{

/***/ 61:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {};
	  },
	  mounted: function mounted() {},
	
	  computed: {},
	  methods: {},
	  components: {}
	};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n#wrapper {\n  margin: 0 auto;\n}\n.suno-resume{\n  padding: 10px;\n}\nh1 {\n  color: white;\n  text-align: center;\n}\n.icon-huojian {\n  font-size: 2.5rem;\n  color: #C0CCDA;\n  position: fixed;\n  bottom: 1.25rem;\n  right: 2.5rem;\n  cursor: pointer;\n  transition: 1s;\n}\n.totop {\n  bottom: 31.25rem;\n  transition: 1s;\n}\n@media screen and (max-width: 440px) {\n.icon-huojian {\n    right: 0.5rem;\n}\n}\n", "", {"version":3,"sources":["/./src/pages/Resume.vue"],"names":[],"mappings":";AACA;EACE,eAAe;CAChB;AACD;EACE,cAAc;CACf;AACD;EACE,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;AACA;IACI,cAAc;CACjB;CACA","file":"Resume.vue","sourcesContent":["\n#wrapper {\n  margin: 0 auto;\n}\n.suno-resume{\n  padding: 10px;\n}\nh1 {\n  color: white;\n  text-align: center;\n}\n.icon-huojian {\n  font-size: 2.5rem;\n  color: #C0CCDA;\n  position: fixed;\n  bottom: 1.25rem;\n  right: 2.5rem;\n  cursor: pointer;\n  transition: 1s;\n}\n.totop {\n  bottom: 31.25rem;\n  transition: 1s;\n}\n@media screen and (max-width: 440px) {\n.icon-huojian {\n    right: 0.5rem;\n}\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c53a7cd0!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resume.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c53a7cd0!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resume.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(132)
	
	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(61),
	  /* template */
	  __webpack_require__(153),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('p', [_vm._v("  Contact me:xiao_cl@foxmail.com")]), _vm._v(" "), _c('div', {
	    staticClass: "suno-resume"
	  }, [_c('p', [_vm._v("个人简况 | Profile：")]), _vm._v(" "), _c('p', [_vm._v("性别： 男")]), _vm._v(" "), _c('p', [_vm._v("年龄： 23 岁")]), _vm._v(" "), _c('p', [_vm._v("专业： 电子科技大学(985 211)-信息对抗技术")]), _vm._v(" "), _c('p', [_vm._v("简介：")]), _vm._v(" "), _c('p', [_vm._v("于2015年7月毕业于电子科技大学，后接触前端并在2016年加入成都清数科技公司，开始前端开发工程师之路。")]), _vm._v(" "), _c('p', [_vm._v("通过CET-6，能通过技术书籍及英文官方文档学习新的技术框架。")]), _vm._v(" "), _c('p', [_vm._v("熟悉es6/7，Webpack Gulp构建。")]), _vm._v(" "), _c('p', [_vm._v("熟悉React,Vue,Angular1等框架，熟练使用git等工具")]), _vm._v(" "), _c('p', [_vm._v("技能 | Skills")]), _vm._v(" "), _c('p', [_vm._v("通过 CET-6，具有简单日常交流的英语能力，能够读懂英文技术文档")]), _vm._v(" "), _c('p', [_vm._v("掌握 HTML 和 CSS，掌握 Javascript，AngularJs, 了解 ES6 语法，Less,Sass 预处理框架,了解 React。")]), _vm._v(" "), _c('p', [_vm._v("熟悉前端模块化开发，了解基本的前端性能优化。")]), _vm._v(" "), _c('p', [_vm._v("了解 C，Java，Scala。了解 NodeJs+Express。")]), _vm._v(" "), _c('p', [_vm._v("熟悉命令行操作以及 vim 操作。会使用 Git 进行多人协作。熟练运用 Photoshop 切图。")]), _vm._v(" "), _c('p', [_vm._v("个人项目 | Projects")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "http://t.cn/RKeXt9b"
	    }
	  }, [_vm._v("http://t.cn/RKeXt9b")]), _vm._v(" "), _c('p', [_vm._v("使用原生JavaScript完整实现一个前端项目的编写。熟悉前端技术，并将其运用于产品实践：包括阅读交互、视觉稿，练习页面制作、js交互、通讯、SEO、规范、代码优化等")]), _vm._v(" "), _c('p', [_vm._v("http://t.cn/RKeXSZa")]), _vm._v(" "), _c('p', [_vm._v("使用Vuejs构建的个人博客")]), _vm._v(" "), _c('p', [_vm._v("工作经历 | Work Experience")]), _vm._v(" "), _c('p', [_vm._v("成都清数科技有限公司  前端开发工程师   2016.06 — 2016.11技术栈： Angularjs Zrender Less Gulp")]), _vm._v(" "), _c('p', [_vm._v("作为项目的主要参与者，和另一前端工程师协同完成整个项目前端部分，负责包括页面编写，js 代码的依赖处理。引进 less 预处理器对样式进行优化。部分页面使用 jade 重构。gulp 编译流程优化。\n      iconfont 引入替代因为前期快捷开发而使用 FontAwesome 的 icon.同时也独立修改了部分后端接口(scala+play2)，以适应前端对数据的需求。")]), _vm._v(" "), _c('p', [_vm._v("东方国信科技有限公司 前端开发工程2016.12 — 至今")]), _vm._v(" "), _c('p', [_vm._v("技术栈： Vuejs Echarts Sass Gulp")]), _vm._v(" "), _c('p', [_vm._v("参与BI的设计与前端开发。研究D3的在大数据可视化中的实现。")])])])
	}]}

/***/ })

});
//# sourceMappingURL=3.487e596c56d534ec4e5f.js.map