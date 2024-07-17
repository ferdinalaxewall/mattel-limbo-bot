import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordService } from './discord/discord.service';
import { GeminiService } from './gemini/gemini.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DiscordService, GeminiService],
})
export class AppModule {}
