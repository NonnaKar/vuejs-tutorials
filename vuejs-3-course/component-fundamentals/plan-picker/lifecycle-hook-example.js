let BlogPostComponent = {
  props: ['id'],
  data() {
    return {
      blogPost: null
    }
  },
  created() {
    const id = this.id
    const response = await axios.get(`api/post/${id}`)
    this.blogPost = response.data
  }
}