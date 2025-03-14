import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ChatWindowComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  selectedAi: any;
  
  
  ais = [
    { 
      id: 'ai1',
      name: 'ChatGPT',
      icon: 'assets/icons/chat-gpt.png',
      description: 'OpenAI\'s assistant',
      endpoint: 'openai'
    },
    { 
      id: 'ai2',
      name: 'Claude',
      icon: 'assets/icons/claude.png',
      description: 'Anthropic\'s assistant',
      endpoint: 'claude'
    },
    { 
      id: 'ai3',
      name: 'Gemini',
      icon: 'assets/icons/gemini.png',
      description: 'Google\'s assistant',
      endpoint: 'gemini'
    },
    { 
      id: 'ai4',
      name: 'Llama',
      icon: 'assets/icons/llama.png',
      description: 'Meta\'s open model',
      endpoint: 'llama'
    },
    { 
      id: 'ai5',
      name: 'Mistral',
      icon: 'assets/icons/mistral.png',
      description: 'Lightweight assistant',
      endpoint: 'mistral'
    },
  ];

  onAiSelected(ai: any) {
    this.selectedAi = ai;
  }
}