const Post = require("../models/posts");

module.exports = class API {
  //fetch all posts
  static async fetchAllPost(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //fetch post by ID
  static async fetchPostById(req, res) {
    const id = req.params.id;
    try {
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //create post
  static async createPost(req, res) {
    const post = req.body;
    try {
      await Post.create(post);
      res.status(201).json({ message: "Post created" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  // update post
  static async updatePost(req, res) {
    const id = req.params.id;
    const newPost = req.body;
    try {
      await Post.findByIdAndUpdate(id, newPost);
      res.status(200).json({ message: "Post updated" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //delete a post
  static async deletePost(req, res) {
    const id = req.params.id;
    try {
      const result = await Post.findByIdAndDelete(id);
      res.status(200).json({ message: "Post deleted" });
    } catch (error) {
      res.status(404).json({ message: err.message });
    }
  }
};
