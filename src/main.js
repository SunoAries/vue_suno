// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as d3 from "d3";
import VueRouter from 'vue-router';
Vue.use(VueRouter)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router:router,
//   template: '<App/>',
//   components: { App }
// }).$mount('#app')
// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Foo = {template: '<div>foo</div>'}
const Bar =  {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {path: '/foo', component: Foo},
  {
    path: '/bar/:id',
    component: Bar,
    children: [
      { path: '', component: UserHome },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        component: UserProfile
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        component: UserPosts
      }
    ]},
  {path: '/app', component: App},
  {path: '/user/:id', component: User }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

/**
 *  下面是生拉硬拽 生成的d3图形，简直醉了。
 * @type {number}
 */
var width = 960,
  height = 500,
  radius = 80,
  x = Math.sin(2 * Math.PI / 3),
  y = Math.cos(2 * Math.PI / 3);

var offset = 0,
  speed = 4,
  start = Date.now();

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(.55)")
  .append("g");

var frame = svg.append("g")
  .datum({radius: Infinity});

frame.append("g")
  .attr("class", "annulus")
  .datum({teeth: 80, radius: -radius * 5, annulus: true})
  .append("path")
  .attr("d", gear);

frame.append("g")
  .attr("class", "sun")
  .datum({teeth: 16, radius: radius})
  .append("path")
  .attr("d", gear);

frame.append("g")
  .attr("class", "planet")
  .attr("transform", "translate(0,-" + radius * 3 + ")")
  .datum({teeth: 32, radius: -radius * 2})
  .append("path")
  .attr("d", gear);

frame.append("g")
  .attr("class", "planet")
  .attr("transform", "translate(" + -radius * 3 * x + "," + -radius * 3 * y + ")")
  .datum({teeth: 32, radius: -radius * 2})
  .append("path")
  .attr("d", gear);

frame.append("g")
  .attr("class", "planet")
  .attr("transform", "translate(" + radius * 3 * x + "," + -radius * 3 * y + ")")
  .datum({teeth: 32, radius: -radius * 2})
  .append("path")
  .attr("d", gear);

d3.selectAll("input[name=reference]")
  .data([radius * 5, Infinity, -radius])
  .on("change", function (radius1) {
    var radius0 = frame.datum().radius, angle = (Date.now() - start) * speed;
    frame.datum({radius: radius1});
    svg.attr("transform", "rotate(" + (offset += angle / radius0 - angle / radius1) + ")");
  });

d3.selectAll("input[name=speed]")
  .on("change", function () {
    speed = +this.value;
  });

function gear(d) {
  var n = d.teeth,
    r2 = Math.abs(d.radius),
    r0 = r2 - 8,
    r1 = r2 + 8,
    r3 = d.annulus ? (r3 = r0, r0 = r1, r1 = r3, r2 + 20) : 20,
    da = Math.PI / n,
    a0 = -Math.PI / 2 + (d.annulus ? Math.PI / n : 0),
    i = -1,
    path = ["M", r0 * Math.cos(a0), ",", r0 * Math.sin(a0)];
  while (++i < n) path.push(
    "A", r0, ",", r0, " 0 0,1 ", r0 * Math.cos(a0 += da), ",", r0 * Math.sin(a0),
    "L", r2 * Math.cos(a0), ",", r2 * Math.sin(a0),
    "L", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
    "A", r1, ",", r1, " 0 0,1 ", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
    "L", r2 * Math.cos(a0 += da / 3), ",", r2 * Math.sin(a0),
    "L", r0 * Math.cos(a0), ",", r0 * Math.sin(a0));
  path.push("M0,", -r3, "A", r3, ",", r3, " 0 0,0 0,", r3, "A", r3, ",", r3, " 0 0,0 0,", -r3, "Z");
  return path.join("");
}

d3.timer(function () {
  var angle = (Date.now() - start) * speed,
    transform = function (d) {
      return "rotate(" + angle / d.radius + ")";
    };
  frame.selectAll("path").attr("transform", transform);
  frame.attr("transform", transform); // frame of reference
});

