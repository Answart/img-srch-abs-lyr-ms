<p align="center">
  <img src="https://user-images.githubusercontent.com/4269260/51512883-fd2aab80-1dbc-11e9-9ba0-f6f04ea4f654.png" height="250" width="350">
  <img src="https://user-images.githubusercontent.com/4269260/51729172-72011e00-2027-11e9-9203-91152493ea9f.png" height="250" width="350">
</p>

# Image Search Abstraction Layer Micro-service

An app that that returns a unique JSON object depending on the route /api/imagesearch or /api/latest/imagesearch (w/pagination). Route /api/imagesearch returns a list of objects each containing a 'url', 'snippet', 'thumbnail', and 'context'. Route /api/latest/imagesearch returns a list of objects each containing a 'term' and a 'when' date.

Data is received through [Google's Custom Search Engine](https://cse.google.com/cse).

/api/imagesearch/cats:
```json
"0": {
  "url": "https://i.ytimg.com/vi/AZL9Sl2BC70/maxresdefault.jpg",
  "snippet": "Lolcats Funny cats 2017 - YouTube",
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJFHmB-RbsTEH7IV6HdwkWXChnDDG24us-TdS_OpClDl0CYW4KGHIY54",
  "context": "https://www.youtube.com/watch?v=AZL9Sl2BC70"
},
"1": {
  "url": "http://i0.kym-cdn.com/photos/images/newsfeed/000/024/740/lolcats-funny-pictures-halp-not-for-sale.jpg",
  "snippet": "Lolcats Funny cats 2017 - YouTube",
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlL11_9PbybfWKO97GPAJY14zqm2RPtcIHGBZcr_1LSas7K7o0yP43zSc",
  "context": "http://knowyourmeme.com/photos/24740-lolcats"
}
```

/api/latest/imagesearch:
```json
{
  "0": {
    "term": "lolcats funny",
    "when": "2018-02-04T19:45:06.785Z"
  },
  "1": {
    "term": "abundace",
    "when": "2018-02-04T19:14:01.188Z"
  },
  "2": {
    "term": "cats",
    "when": "2018-02-05T02:04:32.799Z"
  }
};
```

/api/latest/imagesearch/cats:
```json
{
  "0": {
    "term": "cats",
    "when": "2018-02-05T02:04:32.799Z"
  },
  "1": {
    "term": "cats",
    "when": "2018-02-05T02:04:36.394Z"
  },
  "2": {
    "term": "cats",
    "when": "2018-02-05T02:05:04.210Z"
  }
};
```

User Stories
------------

- I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
- I can paginate through the responses by adding a ?offset=2 parameter to the URL.
- I can get a list of the most recently submitted search strings.

Tech Stack and Key Packages
---------------------------

* [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for node
* [EJS](https://ejs.co/): Embedded JavaScript templates
* [express-ejs-layouts](https://github.com/Soarez/express-ejs-layouts#readme): Layout support for ejs in express
* [express-session](https://github.com/expressjs/session#readme): Create express session middleware with given options
* [connect-flash](https://github.com/jaredhanson/connect-flash#readme): Flash message middleware for Connect
* [body-parser](https://github.com/expressjs/body-parser#readme): Node.js body parsing middleware
* [cookie-parser](https://github.com/expressjs/cookie-parser): Parse Cookie header and populate req.cookies with an object keyed by the cookie names
* [mongoose](https://mongoosejs.com/): MongoDB object modeling tool designed to work in an asynchronous environment
* [connect-mongo](https://github.com/jdesboeufs/connect-mongo#readme): MongoDB session store for Connect and Express
* [got](https://github.com/sindresorhus/got#readme): Simplified http requests

Getting Started
---------------

Set up Google Custom Search Engine

1. Create a [Google Custom Search Engine](https://cse.google.com/cse).

- Do not specify any sites to search but instead use the "Restrict Pages using Schema.org Types" under the "Advanced options".
- For the most inclusive set, use the Schema: Thing. Make a note of the CSE ID.

2. Enable Image Search

- In your search engine settings, enable "Image search":

3. Set up Google Custom Search Engine API

- Register a new app and enable Google Custom Search Engine API here: [Google Developers Console](https://console.developers.google.com/). Remember the API key.

Create your own server. I used mLab.com.
Create a user on that server.

Create your own .env file in the root directory with a DB_URI which links to your server. Here is an example:
```shell
HOST=localhost
PORT=8000
MONGODB_URI=mongodb://<dbuser>:<dbpassword>@<mlabdatabase>
SECRET=my-super-secret
GGL_SRCH_ENGN_ID=<customsearchengineid>
GGL_SRCH_ENGN_PUBLIC_URL=<customsearchenginpublicurl>
GGL_SRCH_ENGN_API_KEY=<customsearchengineapikey>
```

Install dependencies then launch app @ [http://localhost:8000](http://localhost:8000)
```shell
$ npm install
$ npm start
```

Example routes:

* http://localhost:8000
* http://localhost:8000/api/imagesearch
* http://localhost:8000/api/latest/imagesearch

View [app in production](https://answart-img-srch-abs-lyr.herokuapp.com) (if still active)

NPM Commands
------------

| Command | Description |
|---------|-------------|
| npm install | Install dependencies in package.json |
| npm start | Launch app @ **localhost:8000** |
