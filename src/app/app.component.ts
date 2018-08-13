import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any[];
  constructor() {}

  ngOnInit() {
    this.items = [
      {label: 'Update', icon: 'fa-refresh', command: () => {
          this.update();
      }},
      {label: 'Delete', icon: 'fa-close', command: () => {
          this.delete();
      }},
      {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
      {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
  ];
  }

  save(severity: string) {
    // this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
}

update() {
   // this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
   // this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
}
}
