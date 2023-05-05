const router = require('express').Router();
const Post = require('../../models/Post');

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
        ...req.body
    });

    req.save(() => {
      req.title = postData.title;
      req.description = postData.description;

      res.status(200).json(postData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;