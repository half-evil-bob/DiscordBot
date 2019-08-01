const Discord = require('discord.js');

const client = new Discord.Client();
const token = 'NTk1Njk4NzY2NjM2NTE1Mzg1.XUJI9g.csNG2wFZZg2cgp41ZntygMyt1dI';

client.on('ready', () => {
  console.log("I'm in");
console.log(client.user.username);

});

var countDownDate = new Date("August 3 2019 13:40:30").getTime();
pastDrop = 0

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
        clearInterval(timer);
    }
    
};
function upTime() {

    var now = new Date().getTime();
    pastDrop = now - countDownDate;
    days = Math.floor(pastDrop / (1000 * 60 * 60 * 24));
    hours = Math.floor((pastDrop % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((pastDrop % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((pastDrop % (1000 * 60)) / 1000);
};


client.on('message', (msg) => {
    if (msg.content === '!drop') {
        if (distance < 0) {
            msg.channel.send(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        }
        else if (pastDrop > 0) {
            msg.channel.send(`THE SITE IS UP ${msg.author}! GO AND COP!!!\nhttps://halfevilco.com/%27\nHas been up for: `+days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        }
        else {
            msg.channel.send(`Error Please try again!\nIf this continues contact @Dusty#4303! @ya hungry?#5615 `);
            console.log(client.id)
        }
    }
});
client.login(token);

//msg.channel.send(`Hello ${msg.author}!`);