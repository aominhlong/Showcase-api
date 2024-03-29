const animeData = require('./animeData')

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Anime List';
app.locals.anime = animeData;

app.get('/api/v1/anime', (request, response) => {
  response.send(animeData);
});

app.get('/api/v1/anime/:id', (request, response) => {
  const { animeID } = request.params;
  const animeFilteredList = app.locals.anime.filter(anime => animeID === anime.id)

  if (!animeFilteredList) {
    return response.sendStatus(404);
  }

  response.status(200).json(animeFilteredList)
});

app.post('/api/v1/anime', (request, response) => {
  const { title, image, rating, runtime, genre } = request.body;
 
  animeData.userWatchList.push(request.body)

  response.status(201).json({message: 'post successful', post: request.body});
})

app.delete('/api/v1/anime', (request, response) => {
  const { title, image, rating, runtime, genre } = request.body;
  const findAnime = animeData.userWatchList.find(anime => anime.title === request.body.title)
  const findIndex = animeData.userWatchList.indexOf(findAnime)

  if (findAnime) {
    animeData.userWatchList.splice(findIndex, 1)
    response.status(201).json(`deleted ${findAnime}`)
  } else {
    console.log('nothing')
    response.status(404).json({ message: "Anime you are looking for does not exist"})
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

module.exports = app;