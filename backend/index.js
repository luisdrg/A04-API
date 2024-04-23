const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Random Dog\'s Pic & Fact');
  });

  
app.get('/api/facts', async (req, res) => {
  try {
    const response = await axios.get('http://dog-api.kinduff.com/api/facts');
    res.send(response.data.facts);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data from the API');
  }
});

app.get('/api/pics', async (req, res) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data from the API');
  }
});
  
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
