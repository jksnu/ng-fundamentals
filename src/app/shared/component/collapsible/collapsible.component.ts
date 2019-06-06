import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {

  isHidden: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleContent(): void {
    this.isHidden = !this.isHidden;
  }

}
