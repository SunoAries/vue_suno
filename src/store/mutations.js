
export default {
  set_headline: (state, headline) => {
    state.headline = headline
  },
  isSaving_toggle: (state, isSaving) => {
    state.isSaving = isSaving
  },
  isLoading_toggle: (state, isLoading) => {
    state.isLoading = isLoading
  },
  loadMore_toggle: (state, loadMore) => {
    state.loadMore = loadMore
  },
  moreArticle_toggle: (state, flag) => {
    state.moreArticle = flag
  },
  noMore_toggle: (state, flag) => {
    state.noMore = flag
  },
  update_post_title: (state, title) => {
    state.article.title = title
  },
  update_post_content: (state, content) => {
    state.article.content = content
  },
  set_article: (state, article) => {
    state.article = article
  },
  set_all_articles: (state, articles) => {
    state.articles = articles
  },
  add_articles: (state, articles) => {
    state.articles = state.articles.concat(articles)
  },
}
