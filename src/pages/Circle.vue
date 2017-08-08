<template>
  <div id="index">
    <div id="circle">
      <form>
        <input type="radio" name="reference" id="ref-annulus">
        <label for="ref-annulus">Annulus</label><br>
        <input type="radio" name="reference" id="ref-planet" checked>
        <label for="ref-planet">Planets</label><br>
        <input type="radio" name="reference" id="ref-sun">
        <label for="ref-sun">Sun</label>
      </form>
    </div>

    <section class="blog">
        <div v-for="(article, index) in reducedArticles" class="item">
          <router-link :to="{name: 'article', params: {article: article, index: index, page: 1}}" tag="h3" exact class="title_1">{{article.title}}</router-link>
          <time> {{new Date(article.date).toLocaleDateString()}}</time>
          <span class="commentNumber"> 评论:{{article.comment_n}}</span>
          <p class="content">{{article.briefContent}}</p>
          <div class="more"><router-link :to="{name: 'article', params: {article: article, index: index, page: 1}}" tag="button" exact><span>Read More</span></router-link></div>
        </div>
    </section>
  </div>
</template>
<script>
  import * as d3 from "d3";
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    data(){
        return {
        }
    },
    created:function () {
      this.set_headline({
        content: 'Welcome to my blog',
        animation: 'animated bounceIn'
      })
    },
    computed: {
      ...mapGetters(['reducedArticles'])
    },
    methods:{
      ...mapMutations(['set_headline']),
    },
    mounted(){
      let width = 400,
        height = 400,
        radius = 60,
        x = Math.sin(2 * Math.PI / 3),
        y = Math.cos(2 * Math.PI / 3);

      let offset = 0,
        speed = 4,
        start = Date.now();

      let svg = d3.select("#circle").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(.55)")
        .append("g");

      let frame = svg.append("g")
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
          let radius0 = frame.datum().radius, angle = (Date.now() - start) * speed;
          frame.datum({radius: radius1});
          svg.attr("transform", "rotate(" + (offset += angle / radius0 - angle / radius1) + ")");
        });

      d3.selectAll("input[name=speed]")
        .on("change", function () {
          speed = +this.value;
        });

      function gear(d) {
        let n = d.teeth,
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
        let angle = (Date.now() - start) * speed,
          transform = function (d) {
            return "rotate(" + angle / d.radius + ")";
          };
        frame.selectAll("path").attr("transform", transform);
        frame.attr("transform", transform); // frame of reference
      });
    }
  }
</script>
<style>
  #index{
    padding: 20px;
  }
  #circle form{
    float: right;
    margin-top: 150px;
    right: 1em;
  }
  #circle svg{
    float: right;
    top: 1em;
    right: 0;
  }
  .blog{
    padding-right: 500px;
    padding-left: 50px;
  }
  .item h3{
    cursor: pointer;
  }
  .item>.more{
    text-align: right;
  }
  .more button{
    cursor: pointer;
  }
</style>

