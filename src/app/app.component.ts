
import { Component, OnInit } from '@angular/core';
import Artyom from '../../node_modules/artyom.js/build/artyom.js';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  artyom: any;

  constructor() {
    this.artyom = new Artyom();
  }

  ngOnInit() {
    this.artyom.initialize({
      lang: "en-GB",// A lot of languages are supported. Read the docs !
      continuous: false,// recognize 1 command and stop listening !
      listen: true, // Start recognizing
      debug: true, // Show everything in the console
      speed: 1 // talk normally
    }).then(() => {
      console.log("Ready to work !");
      this.init();
    })
      .catch(err => {
        console.log(err);
        // this.artyom.say('I cant here you idiot');
      });
  }

  init() {
    let commandHello = {
      indexes: ["hello", "good morning", "hey"], // These spoken words will trigger the execution of the command
      action: () => { // Action to be executed when a index match with spoken word
        this.artyom.say("Hey buddy ! How are you today?");
      }
    };
    this.artyom.addCommands(commandHello);
    this.artyom.say('Hello');
  }

  test() {
    this.artyom.say("Test message");
  }
}
