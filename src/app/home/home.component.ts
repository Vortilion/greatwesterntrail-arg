import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { GwtArgConfigService } from '../shared/gwt-arg-config.service';
import { Tile } from '../models/tile.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { PlayerCountOption } from '../models/player-count-option.model';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PageFooterComponent } from '../page-footer/page-footer.component';
import { TranslocoModule } from '@jsverse/transloco';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    TranslocoModule,
    PageHeaderComponent,
    PageFooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private applicationConfigService = inject(GwtArgConfigService);
  private responsive = inject(BreakpointObserver);
  private storageService = inject(LocalStorageService);

  readonly playerCount = this.applicationConfigService.playerCount;
  readonly playerCountList: PlayerCountOption[] = [
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
    {
      label: '4',
      value: 4,
    },
  ];

  readonly isXSmall = toSignal(
    this.responsive
      .observe(Breakpoints.XSmall)
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );
  readonly isMax1280 = toSignal(
    this.responsive
      .observe('(max-width: 1280px)')
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  readonly randomNeutralBuildings = signal<Tile[]>([]);
  readonly randomPlayerBuildings = signal<Tile[]>([]);
  readonly randomStationMasters = signal<Tile[]>([]);
  readonly randomCities = signal<Tile[]>([]);

  constructor() {
    const playerCount = this.storageService.getNumber('rar-playerCount');
    if (playerCount !== null) {
      this.updatePlayerCount(playerCount);
    } else {
      this.storageService.setNumber('rar-playerCount', 2);
    }

    this.randomizeSetup();
  }

  updatePlayerCount(playerCount: number): void {
    this.applicationConfigService.setPlayerCount(playerCount);
  }

  onPlayerCountChange(event: MatSelectChange): void {
    const playerCount = Number(event.value);
    this.storageService.setNumber('rar-playerCount', playerCount);
    this.updatePlayerCount(playerCount);
  }

  randomizeSetup(): void {
    this.randomNeutralBuildings.set(
      this.applicationConfigService.getRandomNeutralBuildingOrder(),
    );
    this.randomStationMasters.set(
      this.applicationConfigService.getRandomStationMasters(),
    );
    this.randomPlayerBuildings.set(
      this.applicationConfigService.getRandomPlayerBuildings(),
    );
    this.randomCities.set(this.applicationConfigService.getRandomCities());
  }
}
