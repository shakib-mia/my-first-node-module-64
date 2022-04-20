const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
      res.send("Nodemone installed")
});

const users = [
      { id: 1, name: "shabana", email: "shabana@gmail.com", phone: "01788888888" },
      { id: 2, name: "shabnur", email: "shabnur@gmail.com", phone: "01788888888" },
      { id: 3, name: "suchorita", email: "suchorita@gmail.com", phone: "01788888888" },
      { id: 4, name: "shuchonda", email: "shuchonda@gmail.com", phone: "01788888888" },
      { id: 5, name: "shraboni", email: "shraboni@gmail.com", phone: "01788888888" },
      { id: 6, name: "koyekl", email: "koyekl@gmail.com", phone: "01788888888" },
      { id: 7, name: "payel", email: "payel@gmail.com", phone: "01788888888" },

]

app.get("/users", (req, res) => {
      // filter by query parameter
      if (req.query.name) {
            const search = req.query.name.toLocaleLowerCase();
            const matched = users.filter(user => user.name.toLowerCase().includes(search))
            res.send(matched)
      }
      else {
            res.send(users);
      }
})

app.get("/users/:id", (req, res) => {
      console.log(req.params);
      const id = req.params.id;
      const user = users.find(u => u.id == id);
      res.send(user)
});

app.post('/user', (req, res) => {
      console.log('req', req.body);
      const user = req.body;
      user.id = users.length + 1;
      users.push(user)
      res.send(user);
})

app.get('/fruits/mango/fazli', (res, req) => {
      res.send("sour sour fazli flavor")
})

app.listen(port, () => {
      console.log("Listening to port", port)
})