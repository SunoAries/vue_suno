#温习
###HTML5 
- 语义化标签
- history API只包括2个方法：history.pushState()和history.replaceState()，以及1个事件：window.onpopstate。
- Indexed DB
- Audio、Video
- SVG、Canvas、WebGL及CSS3的3D
###input textarea区别
- input单行，textarea多行
- input有多种type,例如button，radio，text，number，date。textarea只是输入文字
- textarea可以被拉大
- input `<textarea
         value={this.state.value}
         onChange={this.handleChange}
         />`
- JSX 中的 textarea 组件与类型为 text 的 input 组件的用法
  很类似。同样有一个 value prop 用来表示表单的值，而在 HTML 中 textarea 的值则是通过
  children 来表示的。
##用一个div模拟textarea的实现

### js堆栈
- 堆heap为fifo，存储引用变量的地址，对象。现在栈中找指针，再根据指针找堆中对象
- 栈stack，filo，可以存:
1. 词法环境和其中的变量，用法调用栈，还有一个尾调用优化
2. 基本类型变量

吃了吐是栈，吃了拉是堆(队列)
