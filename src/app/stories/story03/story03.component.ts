import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story03',
  templateUrl: './story03.component.html',
  styleUrls: ['../stories.component.css']
})
export class Story03Component implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
    this.startProgress();
    this.goNext();

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

  goNext() {
    setTimeout(() => {
      this.router.navigate(['/stories/story04']);
    }, 30000);
  }


}

