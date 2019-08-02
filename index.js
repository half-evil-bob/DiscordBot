const Discord = require('discord.js');

const client = new Discord.Client();
const token = 'NTk1Njk4NzY2NjM2NTE1Mzg1.XUNHiw.rEg0xcfZX2dJCL8o5gbdBFMLzr4';

client.on('ready', () => {
  console.log("I'm in");
console.log(client.user.username);

});

var ChangeDate = new Date("August 25 2019 15:33:00");
var localTime = ChangeDate.getTime();
var localOffset = ChangeDate.getTimezoneOffset() * 60000;
var utc = localTime + localOffset;
var offset = -5;   
var addOfset = utc + (3600000*offset);
countDownDate = new Date(addOfset); 

var timer = setInterval(myTimer, 1000);
function myTimer() {
    var now = new Date().getTime();
    distance = countDownDate - now;

    pastDrop = 0;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (distance < 0) {
        client.channels.find(x => x.name === 'bot-announcements').send('@everyone\nTHE SITE IS UP GO AND COP!!!\nhttps://halfevilco.com/%27');
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

function currentChicagoTime() {
    let chTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Chicago"
      })
      
    return chTime
}

function currentLocalTime() {
    let outTime = new Date().toLocaleTimeString();

    return outTime
}


client.on('message', (msg) => {
    if (msg.content === '!time') {
        msg.channel.send(`${msg.author}, \nYour Local Time: ` + currentLocalTime() + '\n\nChicago Local Time: '+ currentChicagoTime());
          //msg.channel.send('Hello: '+cTime('London','+1'));
    }
    if (msg.content === '!drop') {
        if (distance > 0) {
            msg.channel.send(`${msg.author}, The Next Half-Evil Drop Is In: `+ days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        }
        else if (pastDrop > 0) {
            msg.channel.send(`${msg.author}, THE SITE IS UP! GO AND COP!!!\nhttps://halfevilco.com/%27\nHas been up for: `+days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        }
        else {
            msg.channel.send('Error Please try again!\nIf this continues contact ' + msg.client.users.get('163899650607153152')+ ' and ' + msg.client.users.get('134874483008733184'));
        }
    }
});

client.login(token);