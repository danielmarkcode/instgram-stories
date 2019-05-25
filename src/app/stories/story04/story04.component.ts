import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story04',
  templateUrl: './story04.component.html',
  styleUrls: ['../stories.component.css']
})
export class Story04Component implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
    this.startProgress();
    this.goOut();

  }

  startProgress() {
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

  goOut() {
    setTimeout(() => {
      this.router.navigate(['/highlights']);
    }, 30000);
  }


}

