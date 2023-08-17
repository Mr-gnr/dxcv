const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const request = require('request');
const lineReply = require('discord-reply')
const util = require("util")
const ytdl = require("ytdl-core");
const convert = require("hh-mm-ss")
const dateFormat = require("dateformat")
const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const db = require("quick.db")
const moment = require('moment')
const guild = require('guild');
const prefix = "-";//برفكس البوت
const fs = require('fs');
const ms = require("ms");
const disbut = require('discord-buttons');
const butt = require(`discord-buttons`)
require('discord-buttons')(client);
const Wline = ""
//لاتلبع في اكواد هنتا عشان لا يخرب البوت



//بايو البوت
client.on("ready", ready => {
  client.user.setActivity( "")//بايو البوت 
});

//

//اكواد البلاغ لاتلعب فيها عشان لا يرب فقط حط ايدي البوم و رتبة

client.on('message', async message => {
    if(message.author.bot) return;
  if(!message.channel.guild) return;
let acRoom = message.guild.channels.cache.find(ch => ch.id === '')//اي وصول البلاغ العادي
          if(!acRoom) return;
          if (message.channel.id != acRoom) return;
          if (message.channel.id == acRoom) {
    if(message.content.startsWith(prefix + 'بلاغ')) {
                  let res = message.content
      .split(" ")
      .slice(1)
      .join(" ");
      
let cWzara = message.guild.channels.cache.find(ch => ch.id === '')//ايدي شات البلاغ العادي
      message.channel.send("تم إرسال بلاغ")
      cWzara.send(`
      
 رقم المبلغ : ${message.author}

 نوع البلاغ : ${res}

<@&ايدي رتبة العساكر>
  `)
    
    
    }
          } 
});


//اكواد البلاغ لاتلعب فيها عشان لا يرب فقط حط ايدي البوم و رتبة


  
          client.on('message', async message => {
    if(message.author.bot) return;
  if(!message.channel.guild) return;
let acRoom = message.guild.channels.cache.find(ch => ch.id === '')//ايدي شات البلتاغ
if (!message.member.roles.cache.has('')) // الرتب المسوؤلة عن استخدام الامر 
 return message.reply(`** انــت لا تملك رتبة مجهول :o: **  `)//رساله يلي تجيه يلي ماعنده رتبة
          if(!acRoom) return;
          if (message.channel.id != acRoom) return;
          if (message.channel.id == acRoom) {
    if(message.content.startsWith(prefix + 'مجهول')) {
                  let res = message.content
      .split(" ")
      .slice(1)
      .join(" ");
      
      let cWzara = message.guild.channels.cache.find(ch => ch.id === '')//ايدي شات وصول البلاغ حق المجهول
      message.channel.send("تم إرسال بلاغ")
      cWzara.send(`

  رقم المبلغ : مجهول

نوع البلاغ : ${res}

<@&ايدي رتبة العسكري>

  `)
    
    
    }
          } 
});

client.login(process.env.token)//توكن تحطه في secret variables 