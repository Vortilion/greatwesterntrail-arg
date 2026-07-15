import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, Input, OnInit, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    MaterialModule,
    LanguageSelectorComponent,
    TranslocoPipe,
  ],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  private responsive = inject(BreakpointObserver);

  @Input() sidebarHandle!: MatSidenav;
  isXSmall!: boolean;

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      if (result.matches) {
        this.isXSmall = true;
      } else {
        this.isXSmall = false;
      }
    });
  }
}
