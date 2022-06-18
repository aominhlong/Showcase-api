# Showcase API

This repo was created to be used with the [Showcase](https://github.com/aominhlong/Showcase) project.

The app is currently deployed on heroku [here](https://anime-api-showcase.herokuapp.com/).

## Set Up

Clone this down, and cd into it. Then run:

`npm install`

`npm start`

## Endpoints
| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all anime |`https://anime-api-showcase.herokuapp.com/api/v1/anime`| GET  | none | object with `animeList` property containing an array of all anime and `userWatchList` property containing an array of anime added to user's watchlist |
| Add an anime to the list |`https://anime-api-showcase.herokuapp.com/api/v1/anime`| POST | `{ "title": <string>, "image": <string>, "rating": <number>, "runtime": <string>, "genre": <string> }` | `{message: 'post successful', post: <Object>}` | 
| Remove an anime from the list |`https://anime-api-showcase.herokuapp.com/api/v1/anime`| DELETE  | `{ "title": <string>, "image": <string>, "rating": <number>, "runtime": <string>, "genre": <string> }` | <`object of deleted anime`> |
