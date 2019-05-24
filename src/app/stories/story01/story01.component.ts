import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story01',
  templateUrl: './story01.component.html',
  styleUrls: ['../stories.component.css']
})
export class Story01Component implements OnInit {

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