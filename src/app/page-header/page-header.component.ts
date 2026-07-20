import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, TranslocoModule, LanguageSelectorComponent],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  readonly sidebarHandle = input.required<MatSidenav>();
  private responsive = inject(BreakpointObserver);

  readonly isXSmall = toSignal(
    this.responsive
      .observe(Breakpoints.XSmall)
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );
}
