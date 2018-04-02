const Twit = require('twit');
const config = require('./config');

let T = new Twit(config);

let stream = T.stream('user');
stream.on('follow', followed);
//emits the function result on follow events

// setInterval(tweetPost, 1000*20); sets up automated tweet every 20 seconds - optional

function followed(eventMsg) {
    console.log("Follow event");
    let name = eventMsg.source.name;
    let screenName = eventMsg.source.screen_name;
    tweetPost(`@${screenName} thanks for subscribing`);
}

function tweetPost(text) {
    let tweet = {
        status: text
    };

    function tweeted(err, data, response) {
        if (err) {
            console.log('There has been an error');
        } else {
            console.log('Successfully posted tweet');
        }
    }

    T.post('statuses/update', tweet, tweeted);
}
