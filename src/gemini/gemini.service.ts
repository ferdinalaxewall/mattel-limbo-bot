import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GeminiService {
  async sendToGemini(prompt: string): Promise<string> {
    // Logic untuk mengirim prompt ke Gemini API dan proses respons
    try {
      const response = await axios.post('https://example.com/gemini-api', { prompt });
      return response.data;
    } catch (error) {
      throw new Error(`Error calling Gemini API: ${error.message}`);
    }
  }
}