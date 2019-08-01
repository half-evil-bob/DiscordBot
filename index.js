const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log("I'm in");
console.log(client.user.username);

});

var countDownDate = new Date("August 25 2019 15:33:00").getTime();

var timer = setInterval(myTimer, 1000);
function myTimer() {
    var now = new Date().getTime();
    distance = countDownDate - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (distance < 0) {
        client.channels.find(x => x.name === 'bottest').send('@everyone\nTHE SITE IS UP GO AND COP!!!\nhttps://halfevilco.com/%27');
        var timerPast = setInterval(upTime, 1000);
    }
    
};
function upTime() {
    clearInterval(timer);

    var now = new Date().getTime();
    pastDrop = distance + now;
    days = Math.floor(pastDrop / (1000 * 60 * 60 * 24));
    hours = Math.floor((pastDrop % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((pastDrop % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((pastDrop % (1000 * 60)) / 1000);
    console.log(pastDrop)
};


client.on('message', (msg) => {
    if (msg.content === '!drop') {
        if (distance > 0) {
            msg.channel.send(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        }
        else if (pastDrop > 0) {
            msg.channel.send(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        }
        else{
            client.channels.find(x => x.name === 'bottest').send(`THE SITE IS UP ${msg.author}! GO AND COP!!!\nhttps://halfevilco.com/%27`);
        }
    }
});
client.login(token);

//msg.channel.send(`Hello ${msg.author}!`);