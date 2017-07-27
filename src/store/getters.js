import marked from 'marked'
export default {
  reducedArticles:(state)=>{
    const articles = state.articles.map(article=>{
      let newArticle = {}
      for(let i in article){newArticle[i]=article[i]}
      newArticle.briefContent = marked(article.content || '').replace(/<[^>]*>/g, '').slice(0, 200) + '......'
      return newArticle
    })
    return articles
  },
  tagSort:(state)=>{
    let tagSort={};
    let tags = state.articles.reduce(function (a,b) {
         return a.concat(b.tags)
    },[]);
    tags = Array.from(new Set(tags));
    state.articles.forEach(function (i) {
      i.tags.forEach(function (tag) {
        if(Array.isArray(tagSort[tag])){
          tagSort[tag].push(i)
        }else{
          tagSort[tag]=[i]
        }
      })
    })
    return tagSort
  }
}
