import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

interface Message {
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  @Input() ai: any;
  messages: Message[] = [];
  newMessage: string = '';
  isTyping: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
 
    this.messages.push({
      text: `Hi there! I'm ${this.ai.name}. How can I help you today?`,
      sender: 'ai',
      timestamp: new Date()
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {

      this.messages.push({
        text: this.newMessage,
        sender: 'user',
        timestamp: new Date()
      });
      
      const userMessage = this.newMessage;
      this.newMessage = '';
      
  
      this.isTyping = true;
      
   
      this.apiService.sendMessage(userMessage, this.ai.endpoint).subscribe(response => {
   
        this.isTyping = false;
        
    
        this.messages.push({
          text: response.response,
          sender: 'ai',
          timestamp: new Date()
        });
        
    
        setTimeout(() => {
          const messageContainer = document.querySelector('.messages-container');
          if (messageContainer) {
            messageContainer.scrollTop = messageContainer.scrollHeight;
          }
        }, 0);
      });
    }
  }
}