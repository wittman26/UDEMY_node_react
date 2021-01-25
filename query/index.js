const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

// It gives back the posts object 
app.get('/posts', (req, res) => {
    res.send(posts);
});

// Request received from Event Bus
app.post('/events', (req, res) => {
    const { type, data } = req.body;

    // Conditions: PostCreated or CommentCreated
    if (type === 'PostCreated') {
      const { id, title } = data;
  
      posts[id] = { id, title, comments: [] };
    }
  
    if (type === 'CommentCreated') {
      const { id, content, postId } = data;
  
      const post = posts[postId];
      post.comments.push({ id, content });
    }
  
    console.log("Actual Posts State: " + JSON.stringify(posts));
    console.log(posts);
  
    res.send({});
});

app.listen(4002, () => {
    console.log('Listening on 4002');
})