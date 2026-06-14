/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['25475692340','254788409105'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'SMURF-XMD',
    prefix: '!',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVmAYEFCI6YhVREPHSiLeNfSiggBIErCpuTvjvG9jT0/OwO9v7VrfIkyczT30HWY4pslAL1O+gILiCDHVL1hYIqGBShiEioA8CyCBQwVqTkKGsr0K+CQklxh5qS0laJlelCsiI1prbs9rcJ0s3fwWPPihKL8X+bwDvHBwbWmhTo+BhxBsD+CIdU65eN45hOy+zHlckl9JFx0x8BY8OEWKCs0gvYnRFBKYWajcQk6/R9438fA6GAb3IU6E0BEnz3DM/XWn7yE9vznJE/PK4mZjswH2NvhG9cet476e+4vJVoCWHwbmX9vD85LGaTU1LHlM+PbaGUL/TpzjKUGAGKGOYtV/WXR77F2rGRY700/nG3+p497b3Khg4otUI4jJumqicHAJP/6LuN34hXb1FvE0meu+Wzg+jwVveTBZpz1eWyeEQmkUjN7Gyju1fiW/IR1aS/6O7uxq+BKdtzHvIVKLiuF5PxKJi7dwUsNWwnbLDoTvVdV74In2yc7YxvtVoydzxQtNDX0+yfU0TaTCbhtVQWhTz4cvAYlnySR+ykvyOpWcv8MXubemikEVxwabihaJ7e7ly03bZcLU4dYiwTxg6bIeMUT0YnFfJ2fH0N0+mh5WWbFZ5XmjpQpnU9UC3T9PhYrx9fXaUoNYMgMo/+oCgCFNGIMN51p2NxD6AQeUgnyD2VBeMIigVlXDHZYNuOHaU6624zMbW8ZT4NdmdB0qws8sIX2LxFfRBQXIfUYoCA1OWk9ZGlMIIUaD++VcfZKhh77511QZ8H4SYUOZmZZHmMPgw9eMS+n5eZsxpM1/rFogAlfs8RozhLKKdjGUGiR/jCmkxZBSoIUwp+tkgIigAKiMl+jm0Wh50uhu8Mlgasgj64Pr0AwdABYIkDkcjkVN4TlIl/g/6re5gYVF8yxADfZA+n/HKSOaHnMAPOInjlO5ld/H4ybADDBCDOKVABdrS2jeKP9HXvUW10ufz8TYaa9EYfHb0kYx36cXLlg9Mgdl6saWRO8f3YWZY1cYJdx5/m8GE2/N7lpgH7vT6DyBABXrtCYddIt73l7aJht6GCcLCM+WxWJXBcWi5zHedt9Xdc+pTI9glwsUbMq47WY9lOrIvuZ3Z/sVfe3drVM6WtrnwvUkXoz4IUIV99Gsxx8HZ0KPXxNpkblzjjWwbPOIzV18Lm5s2rhDjd1Rc3rPNNinXlx7Xur1RKJ53y/BuipHeOo5Rey60TjojJxLGUjyt3zP7nJn0x1+Fn3HqvOq2IUbP0c9g5+B/e/dOvIsY9+j/gvHjM/mXgZwgk1sdnRXZTSx3ac4mOe1JTUvuXMYJCowPxWoW7L2zNmNz8Hj81QdFClmYkytQAcwCkuMA9AHJyy6zZhbmvymmjW1T20ZO13kKKRt/zsEOXxFl8FoAlR+OeFGWB5Ly+Bte2Z6dPAcAAA==',
    newsletterJid: '120363351424590490@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: true, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniqueacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_uniqu_hacker'
    }
};
  
