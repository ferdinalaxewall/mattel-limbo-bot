// discord.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Client, Message, GatewayIntentBits } from 'discord.js';
import { GeminiService } from 'src/gemini/gemini.service';

@Injectable()
export class DiscordService {
  // private readonly logger = new Logger(DiscordService.name);
  // private readonly client: Client;

  // constructor(private readonly geminiService: GeminiService) {
  //   this.client = new Client({ intents: [GatewayIntentBits.Guilds] });
  //   this.setup();
  // }

  // private setup() {
  //   this.client.on('ready', () => {
  //     this.logger.log(`Logged in as ${this.client.user.tag}!`);
  //   });

  //   this.client.on('message', async (message: Message) => {
  //     try {
  //       if (message.author.bot) return;
        
  //       // Contoh: Bot merespons pesan !prompt <pesan>
  //       if (message.content.startsWith('!prompt')) {
  //         const prompt = message.content.slice(8).trim(); // Ambil pesan setelah !prompt
  //         const response = await this.geminiService.sendToGemini(prompt);
  //         message.channel.send(response);
  //       }
  //     } catch (error) {
  //       this.logger.error(error.message);
  //     }
  //   });

  //   this.client.login('your-discord-bot-token');
  // }
}