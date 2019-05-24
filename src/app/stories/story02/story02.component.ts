import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story02',
  templateUrl: './story02.component.html',
  styleUrls: ['../stories.component.css']
})
export class Story02Component implements OnInit {

  constructor() { }


  ngOnInit() {
    const elem = document.getElementById('myBar');
    let width = 1;
    const id = setInterval(frame, 300);
    function frame() {
      if (width >= 400) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }
}

