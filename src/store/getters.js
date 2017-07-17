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
  }
}
