const Post = require('./db.js').Post

module.exports.createPost = async(title, content, thumbnail) => {
  await Post.create({
    data:{
      title,
      content,
      thumbnail
    }
  })
}

module.exports.getPostIds = async() => {
  return await Post.findMany({take: 1, select:{id:true}, orderBy:{id:"desc"}})
}

module.exports.getPosts = async() => {
  return await Post.findMany({take: 5, orderBy:{id:"desc"}})
}

module.exports.getPost = async(id) => {
  return await Post.findUnique({where:{id:id}})
}