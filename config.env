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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_30_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhSd3Y1b3ZSQmlna1Z3T2gvZ2duRFdOaWVqQkRvSmRSazNIOGViUGI3SDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFLbmQ4MXdaUTI2MENCOEtTVFdOMHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDUwMmZiMWEtYzg0ZS00NjQyLTgwM2MtMzViZmI0NjNmMWYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMTEwLFxuICAgICAgMjEsXG4gICAgICA2MCxcbiAgICAgIDIyNSxcbiAgICAgIDU4LFxuICAgICAgMjAzLFxuICAgICAgNixcbiAgICAgIDE1MixcbiAgICAgIDEwOSxcbiAgICAgIDk5LFxuICAgICAgMTY1LFxuICAgICAgMjQ4LFxuICAgICAgOCxcbiAgICAgIDI0NSxcbiAgICAgIDIxMCxcbiAgICAgIDI0NixcbiAgICAgIDExLFxuICAgICAgMTA3LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTE5LFxuICAgICAgMTQ1LFxuICAgICAgMTk1LFxuICAgICAgOTEsXG4gICAgICA4NSxcbiAgICAgIDE1LFxuICAgICAgMTkyLFxuICAgICAgOTMsXG4gICAgICAyMjcsXG4gICAgICAxMDcsXG4gICAgICA2MCxcbiAgICAgIDMzLFxuICAgICAgMjI4LFxuICAgICAgMTk5LFxuICAgICAgMjI5LFxuICAgICAgNzMsXG4gICAgICAxMTksXG4gICAgICA2NCxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJUQ1c5RTc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU0NDk0ODEzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4LyS8J2bsvCdkYXwnZuq8J2brvCdkLbwnZuv4LySXCIsXG4gICAgXCJsaWRcIjogXCIxMzg3ODM3ODE2MTM3NjQ6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTJiOExNRkVJcTZzN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrOUtKUVV6MzZKZ3c3Sk5sM0Y5SU5hZHNXU0pMd0l4WWppTWlXTGdXYVFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdDdWdTdWd5RWc4RDlvZ0FtaFZ4QmRGM1k0dTVNVUpTTUpqTis4SUNxRUhML240ZGRkck5vcFFhOUhZVjBNWFlobzFxeGFxVk1WTExKZjBQWS9KN0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndqYUtVYzdMdTJaUEJDNE4wZGRxWTAyNzgvS0kwOVlDdVE3RWdPVnNNZG1rZ1hqZUs0UnMwNzV6dWZJQVliYm14TUxXWmlBMzVPNkVXYmVPWVRwUGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTQ0OTQ4MTM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDk5MzQyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB2eFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHZ4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwic2JPZmxVd0cyb2lxbWRxbFdGeTNleG5NSnJBbFFDK1lqWWR3MzA0Si9mMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDUwOTcwNTcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwOTkzMzU0MDIwXCJ9Igp9"  // PUT your SESSION_ID 


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
