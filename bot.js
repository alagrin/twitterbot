const Twit = require('twit');
const config = require('./config');

//start new session...
const T = new Twit(config);

//posts tweet to your account

// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//     console.log(data)
//   });

//get tweets by searchign text, count, etc.
T.get('search/tweets', {q: 'Alan Grinberg'}, function(err, data, response) {
    let tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
});

