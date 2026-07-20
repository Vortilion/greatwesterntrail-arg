import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { RouterOutlet } from '@angular/router';
import { SwUpdate, VersionDetectedEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  title = 'gwt-arg_randomizer';
  private destroyRef = inject(DestroyRef);
  private swUpdate = inject(SwUpdate);
  private snackbar = inject(MatSnackBar);
  private translocoService = inject(TranslocoService);

  ngOnInit(): void {
    this.swUpdate.unrecoverable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        const snackError = this.snackbar.open(
          'An error occurred that we cannot recover from:\n' +
            event.reason +
            '\n\nPlease reload the page.',
          'Reload',
        );

        snackError
          .onAction()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(() => {
            window.location.reload();
          });

        console.debug(
          'An error occurred that we cannot recover from:\n' +
            event.reason +
            '\n\nPlease reload the page.',
        );
      });

    this.swUpdate.versionUpdates
      .pipe(
        filter(
          (evt): evt is VersionDetectedEvent => evt.type === 'VERSION_DETECTED',
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        const snack = this.snackbar.open(
          this.translocoService.translate('messages.update-available'),
          'Reload',
        );

        snack
          .onAction()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(() => {
            window.location.reload();
          });
      });
  }
}
