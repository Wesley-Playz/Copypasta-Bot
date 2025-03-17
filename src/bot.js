const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent, // Ensure this intent is enabled in the Discord Developer Portal
    ],
});

const secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
const BOT_TOKEN = secrets.BOT_TOKEN;

function removeCharacters(str, charsToRemove) {
    for (let char of charsToRemove) {
        str = str.split(char).join('');
    }
    return str;
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    // Prevent the bot from replying to itself
    if (message.author.id === client.user.id) {
        return;
    }

    const copyPasta = "I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.\nMany computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.\nThere really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux!";
	const tuxCopyPasta = "I love the Linux penguin, Tux. Tux is awesome. You should use Linux.";

    let msg = message.content;

    const charsToRemove = "-_()*&$^!@${}[]||\\.,<>?`\"'~€ƒ‚„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ⟴:ロ‼️⁉️™️ℹ️↔️↕️";

    msg = removeCharacters(msg, charsToRemove);
    msg = msg.toLowerCase();

    if (message.content.includes(copyPasta)) {
        return;
    } else if (msg.includes("gnu/linux")) {
        return;
    } else if (msg.includes("linux")) {
		msg = removeCharacters(msg, "/");
		message.reply(copyPasta);
		return;
	} else if (msg.includes("tux") || msg.includes("penguin")) {
        message.reply("https://tenor.com/view/penguin-linux-tux-tux-linux-gif-341950137175367051");
		message.reply(tuxCopyPasta);
    } else if (msg.includes("loonux")) {
        message.reply(":middle_finger:");
	} else if (msg.includes("hamachi")) {
        message.reply("https://tenor.com/view/fire-eyes-elmo-hell-gif-13483060728962175532");
    } else if (msg.includes("mac")) {
        message.reply("https://tenor.com/view/trash-can-gif-8489844925274334788");
        message.reply("https://tenor.com/view/mac-trash-gif-26503253");
    } else if (msg.includes("windows")) {
        message.reply("https://tenor.com/view/eroor-gif-27634078");
    } else if (msg.includes("android") || msg.includes("apple")) {
        message.reply("https://tenor.com/view/android-apple-wipe-gif-8915661");
    } else if (msg.includes("arch")) {
        message.reply("https://tenor.com/view/i-use-arch-btw-use-arch-linux-fedora-gif-23272370");
    } else if (msg.includes("debian")) {
        message.reply("https://tenor.com/view/ragatha-tadc-digital-circus-the-amazing-digital-circus-linux-gif-1448650412291914103");
    } else if (msg.includes("ubuntu")) {
        message.reply("https://tenor.com/view/linux-ubuntu-gif-26430779");
    } else if (msg.includes("c#") || msg.includes("c sharp")) {
        message.reply("https://tenor.com/view/c-sharp-users-be-ike-gif-26316458");
        message.reply("https://tenor.com/view/c-sharp-gif-20933114");
    } else if (msg.includes("c++") || msg.includes("c plus plus") || msg.includes("cpp")) {
        message.reply("https://tenor.com/view/c-plus-plus-c-plus-plus-plus-plus-nerd-gif-27208235");
    } else if (msg.includes("python")) {
        message.reply("https://tenor.com/view/do-not-run-python-python-computer-python-coding-coding-funny-coding-meme-gif-10365831290651691441");
    } else if (msg.includes("javascript")) {
        message.reply("https://tenor.com/view/jinx-cat-javascript-js-jinx-gif-16689995327643035486");
        message.reply("https://tenor.com/view/learn-learning-javascript-learns-javascript-stupid-generator-programming-gif-26843752");
    } else if (msg.includes("rust")) {
        message.reply("https://tenor.com/view/ferris-rust-rustlang-crab-cute-gif-26396486");
    } else if (msg.includes("html") || msg.includes("hypertext markup language")) {
        message.reply("https://tenor.com/view/html-peter-html-with-peter-monkey-monkey-typewriter-meme-gif-25254099");
    } else if (msg.includes("css") || msg.includes("cascading style sheet")) {
        message.reply("https://tenor.com/view/family-guy-css-open-window-annoyed-pissed-gif-12014506");
    } else if (msg.includes("sql")) {
        message.reply("https://tenor.com/view/sql-gif-5106133080931365952");
    } else if (msg.includes("php")) {
        message.reply("https://tenor.com/view/he-was-forced-to-use-php-php-seal-gif-5490578701630315793");
	} else if (msg.includes("raspberry pi") || msg.includes("rpi") || msg.includes("raspi")) {
        message.reply("https://tenor.com/bblL8.gif");
	} else if (msg.includes("dos") || msg.includes("ms-dos") || msg.includes("msdos") || msg.includes("disk operating system")) {
        message.reply("https://tenor.com/bSJNN.gif");
	} else if (msg.includes("freebsd")) {
        message.reply("https://tenor.com/bEsjk.gif");
	} else if (msg.includes("qubes")) {
        message.reply("https://tenor.com/view/weird-al-crazy-wow-creepy-nuts-gif-5547782");
	} else if (msg.includes("typescript")) {
        message.reply("https://tenor.com/view/typescript-death-glare-creepy-eyes-gif-23255310");
	} else if (msg.includes("piracy") || msg.includes("pirate") || msg.includes("emulator") || msg.includes("emulation") || msg.includes("emulated")) {
		message.reply("https://tenor.com/view/pirate-piracy-you-are-a-pirate-lazytown-robbie-rotten-gif-15160380677926524721");
		message.reply("https://tenor.com/view/nintendo-emulation-piracy-lawyers-better-call-saul-gif-26818864");
    } else if (msg.includes("linus")) {
        message.reply("https://tenor.com/view/python-linux-linus-torvalds-gif-27620467");
    } else if (msg.includes("java")) {
        message.reply("https://tenor.com/view/java-gif-26323674");
    } else if (msg.includes("steve jobs")) {
        message.reply("https://tenor.com/view/steve-jobs-steve-unemployed-gif-25511907");
	} else if (msg.includes("loki") || msg.includes("low key") || msg.includes("lowkey") || msg.includes("lo key") || msg.includes("lokey")) {
        message.reply("https://tenor.com/view/loki-tom-hiddleston-loki-odinson-prince-asgardian-gif-16216397");
	} else if (msg.includes("nintondre")) {
        message.reply("https://i.imgur.com/wMWp2P3.jpeg");
	} else if (msg.includes("nintendo")) {
        message.reply("https://tenor.com/view/nintendo-switch-take-my-money-handheld-console-gif-17835713");
	} else if (msg.includes("bug")) {
        message.reply("https://tenor.com/view/lightsaber-bug-spin-gif-20919535");
	} else if (msg.includes("botw")) {
        message.reply("https://tenor.com/view/zelda-neco-gerudo-botw-link-gif-843622267785080036");
	} else if (msg.includes("discord mod") || msg.includes("moderator")) {
        message.reply("https://tenor.com/view/discord-monkey-discord-moderator-select-2020-gif-19647680");
	} else if (msg.includes("unity")) {
        message.reply("https://i.imgur.com/DJQJ3Pt.png");
	} else if (msg.includes("premiere pro")) {
        message.reply("https://tenor.com/view/spongebob-computer-fire-premiere-pro-adobe-gif-12394730211652409055");
		message.reply("https://tenor.com/view/adobe-premiere-pro-crying-bathtub-clothed-gif-864537884625292966");
	} else if (msg.includes("davinci") || msg.includes("davinci resolve")) {
        message.reply("https://tenor.com/view/davinci-resolve-my-beloved-heart-locket-video-editing-sony-vegas-studio-gif-13868487280911871152");
	} else if (msg.includes("iphone")) {
        message.reply("https://tenor.com/view/bro-get-an-iphone-they-are-so-good-iphone-iphones-iphone-break-jerryrigeverything-gif-7633997654041015866");
    }
});

client.login(BOT_TOKEN);