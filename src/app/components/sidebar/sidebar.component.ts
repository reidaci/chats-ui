import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() aiSelected = new EventEmitter<any>();
  @Input() selectedAiId: string | undefined;

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

  selectAi(ai: any) {
    this.aiSelected.emit(ai);
  }
}