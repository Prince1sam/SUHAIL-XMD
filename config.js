const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349054494813";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_07_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICA2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDksXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVVWZ4bTBFTG9zSkJJcjFCYkJxWmFQcEZVR0NKTHVyaXFqRVh3TDB0YThZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJodGxUdkpobVFkeWJGbS1sbDQ2b0l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlZjgwYTEzLTU5MWItNDcxYi04ZGYyLWFiZjMxZTBlMmFmNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxMjMsXG4gICAgICA3MCxcbiAgICAgIDIwMCxcbiAgICAgIDIxMyxcbiAgICAgIDEwOSxcbiAgICAgIDIzMixcbiAgICAgIDIzMyxcbiAgICAgIDI0LFxuICAgICAgOTYsXG4gICAgICAzOSxcbiAgICAgIDIwLFxuICAgICAgMTY5LFxuICAgICAgMjUyLFxuICAgICAgMjAsXG4gICAgICA3MyxcbiAgICAgIDkxLFxuICAgICAgNDcsXG4gICAgICAyMjAsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxNjgsXG4gICAgICAyMixcbiAgICAgIDEyNSxcbiAgICAgIDM3LFxuICAgICAgNTgsXG4gICAgICAzMCxcbiAgICAgIDIyNyxcbiAgICAgIDIzLFxuICAgICAgMzksXG4gICAgICAxMzgsXG4gICAgICAyMixcbiAgICAgIDMzLFxuICAgICAgMjQ0LFxuICAgICAgMTIsXG4gICAgICAxODUsXG4gICAgICAxOCxcbiAgICAgIDIxMCxcbiAgICAgIDExOCxcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMQ1pCRFpCOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1NDQ5NDgxMzoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuC8kvCdm7LwnZGF8J2bqvCdm67wnZC28J2br+C8klwiLFxuICAgIFwibGlkXCI6IFwiMTM4NzgzNzgxNjEzNzY0OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05HYjhMTUZFT2plbTdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiazlLSlFVejM2Smd3N0pObDNGOUlOYWRzV1NKTHdJeFlqaU1pV0xnV2FRST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFbHlacjhKVjlHKzZJMzRxL3pMa21tdGVWZUpuRUZZeHo0aG5MYmxZU2hFR2dZV25SdmJlcWF0YnBJY2llaDYwd0Q4ZHlCUUpxVVR0aWIvT0x6SFpBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNUzR4aFhSUWZ3VUFBakVwT2d6ak5Xc0JhajU1aVZsS0x3dytiTER0SGJVUVNDOE5sbUpTbzhTcENaUFMyejBMRXVFTWphamU4ZGN5ZCsyT3lVcTRndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU0NDk0ODEzOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3MDIwNjBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "༒𝛲𝑅𝛪𝛮𝐶𝛯༒",
  packname: process.env.PACK_NAME || "༒𝛲𝑅𝛪𝛮𝐶𝛯༒",
  botname : process.env.BOT_NAME  || "༒𝛲𝑅𝛪𝛮𝐶𝛯༒",
  ownername:process.env.OWNER_NAME|| "༒𝛲𝑅𝛪𝛮𝐶𝛯༒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
