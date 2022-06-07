const animeList = require('./animeData')

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Anime List';
app.locals.anime = animeList;

app.get('/api/v1/anime', (request, response) => {
  response.send(animeList);
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
  const { animeID } = request.params;
  const animeFilteredList = app.locals.anime.filter(anime=> animeID === anime.id)
  animeList.push(request.body)

  response.status(201).json({message: 'post successful', post: request.body});
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
