# img-srch-abs-lyr

## Image Search Abstraction Layer

An app that that returns a unique JSON object depending on the route /api/imagesearch or /api/latest/imagesearch (w/pagination). Route /api/imagesearch returns a list of objects each containing a 'url', 'snippet', 'thumbnail', and 'context'. Route /api/latest/imagesearch returns a list of objects each containing a 'term' and a 'when' date.

Data is received through [Google's Custom Search Engine](https://cse.google.com/cse).

## User Stories

- I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
- I can paginate through the responses by adding a ?offset=2 parameter to the URL.
- I can get a list of the most recently submitted search strings.

## Install

### Production

```
https://answart-img-srch-abs-lyr.herokuapp.com
https://answart-img-srch-abs-lyr.herokuapp.com/api/imagesearch/cats
https://answart-img-srch-abs-lyr.herokuapp.com/api/latest/imagesearch
https://answart-img-srch-abs-lyr.herokuapp.com/api/latest/imagesearch/cats
```

### Local

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
```
PORT=8000
DB_URI="mongodb://<dbuser>:<dbpassword>@ds123728.mlab.com:23728/answart-img-srch-abs-lyr"
SECRET="my-super-secret"
GGL_SRCH_ENGN_ID="<customsearchengineid>"
GGL_SRCH_ENGN_PUBLIC_URL="<customsearchenginpublicurl>"
GGL_SRCH_ENGN_API_KEY="<customsearchengineapikey>"
```

```
npm install
node server.js
```

```
http://localhost:8000
http://localhost:8000/api/imagesearch
http://localhost:8000/api/latest/imagesearch
```

## Output

/api/imagesearch/cats:
```
"0": {
    "url": "https://i.ytimg.com/vi/AZL9Sl2BC70/maxresdefault.jpg",
    "snippet": "Lolcats Funny cats 2017 - YouTube",
    "thumbnail":	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJFHmB-RbsTEH7IV6HdwkWXChnDDG24us-TdS_OpClDl0CYW4KGHIY54",
    "context":	"https://www.youtube.com/watch?v=AZL9Sl2BC70"
},
"1": {
  "url": "http://i0.kym-cdn.com/photos/images/newsfeed/000/024/740/lolcats-funny-pictures-halp-not-for-sale.jpg",
  "snippet": "Lolcats Funny cats 2017 - YouTube",
  "thumbnail":	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlL11_9PbybfWKO97GPAJY14zqm2RPtcIHGBZcr_1LSas7K7o0yP43zSc",
  "context":	"http://knowyourmeme.com/photos/24740-lolcats"
}
```

/api/latest/imagesearch:
```
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
    "term":	"cats",
    "when":	"2018-02-05T02:04:32.799Z"
  }
};
```

/api/latest/imagesearch/cats:
```
{
  "0": {
    "term":	"cats",
    "when":	"2018-02-05T02:04:32.799Z"
  },
  "1": {
    "term":	"cats",
    "when":	"2018-02-05T02:04:36.394Z"
  },
  "2": {
    "term":	"cats",
    "when":	"2018-02-05T02:05:04.210Z"
  }
};
```
