const Twit = require('twit');
const config = require('./config');

//start new session...
let T = new Twit(config);

//get tweets by searching text, count, etc.
T.get('search/tweets', {q: 'insert search here'}, function(err, data, response) {
    let tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
});

