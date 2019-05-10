webpackJsonp([4,6],{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(9);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(8);
	
	var _marked = __webpack_require__(55);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_marked2.default.setOptions({
	  highlight: function highlight(code) {},
	  sanitize: true
	});
	var renderer = new _marked2.default.Renderer();
	renderer.heading = function (text, level) {
	  return '<a href="#' + text + '" class="hashTitle" data-scroll><h' + level + ' id="' + text + '">' + text + '</h' + level + '></a>';
	};
	exports.default = {
	  name: 'article',
	  data: function data() {
	    return {
	      article: { content: 'fafa' }
	    };
	  },
	
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['reducedArticles']), {
	    content: function content() {
	      return (0, _marked2.default)(this.article.content);
	    }
	  }),
	  created: function created() {
	    debugger;
	    if (!this.$route.params.article) {
	      this.$router.push({ path: 'circle' });
	    }
	    this.article = this.$route.params.article;
	  }
	};

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.article[data-v-4710999b]{\n  padding: 20px;\n}\n\n", "", {"version":3,"sources":["/./src/pages/Article.vue"],"names":[],"mappings":";AACA;EACE,cAAc;CACf","file":"Article.vue","sourcesContent":["\n.article[data-v-4710999b]{\n  padding: 20px;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(116);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4710999b&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Article.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4710999b&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Article.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(126)
	
	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(58),
	  /* template */
	  __webpack_require__(147),
	  /* scopeId */
	  "data-v-4710999b",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ }),

/***/ 147:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "article"
	  }, [_c('h1', [_vm._v(_vm._s(_vm.article.title))]), _vm._v(" "), _c('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])
	},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=4.70c1a95a6c541e6a571a.js.map