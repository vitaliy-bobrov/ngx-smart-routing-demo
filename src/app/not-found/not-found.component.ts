import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-not-found',
  template: `
    <h2>
      404 - Page not found
    </h2>
    <p *ngIf="path">You might want to go to the <a [routerLink]="path">"{{ path }}" page</a></p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {
  path: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.pipe(take(1))
      .subscribe((data: { path: string }) => {
        this.path = data.path;
      });
  }
}
