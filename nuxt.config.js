import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  
  docs: {
    primaryColor: '#E24F55'
  },
  router: { base: '/documentation/' },
  generate: {
    fallback: "404.html"
  }
})
