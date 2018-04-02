const Twit = require('twit');
const config = require('./config');

let T = new Twit(config);

let tweet = {
    status: 'Hi there I am testing'
};

function tweeted(err, data, response) {
    if (err) {
        console.log('There has been an error');
    } else {
        console.log('Successfully posted tweet');
    }
}

T.post('statuses/update', tweet, tweeted);