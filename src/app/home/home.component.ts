import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
import { ApplicationConfigService } from '../shared/application-config.service';
import { Tile } from '../models/tile.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { PlayerCountOption } from '../models/player-count-option.model';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PageFooterComponent } from '../page-footer/page-footer.component';
import { TranslocoModule } from '@jsverse/transloco';

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
export class HomeComponent implements OnInit {
  private applicationConfigService = inject(ApplicationConfigService);
  private responsive = inject(BreakpointObserver);
  private storageService = inject(LocalStorageService);

  randomNeutralBuildings!: Tile[];
  randomPlayerBuildings!: Tile[];
  randomStationMasters!: Tile[];
  randomCities!: Tile[];
  playerCount!: number;
  playerCountList!: PlayerCountOption[];
  isXSmall!: boolean;
  isMax1280!: boolean;

  ngOnInit(): void {
    this.playerCount = 2;
    this.playerCountList = [
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

    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      if (result.matches) {
        this.isXSmall = true;
      } else {
        this.isXSmall = false;
      }
    });

    this.responsive.observe('(max-width: 1280px)').subscribe((result) => {
      if (result.matches) {
        this.isMax1280 = true;
      } else {
        this.isMax1280 = false;
      }
    });

    const playerCount = this.storageService.getNumber('rar-playerCount');
    if (playerCount !== null) {
      this.emitPlayerCount(playerCount);
    } else {
      this.storageService.setNumber('rar-playerCount', 2);
    }

    this.applicationConfigService.playerCount.subscribe(
      (playerCount: number) => {
        this.playerCount = playerCount;
      }
    );

    this.randomizeSetup();
  }

  emitPlayerCount(playerCount: number) {
    this.applicationConfigService.playerCount.emit(playerCount);
  }

  onPlayerCountChange(event: MatSelectChange) {
    const playerCount = Number(event.value);
    this.storageService.setNumber('rar-playerCount', playerCount);
    this.emitPlayerCount(playerCount);
  }

  randomizeSetup() {
    this.randomNeutralBuildings =
      this.applicationConfigService.getRandomNeutralBuildingOrder();

    this.randomStationMasters =
      this.applicationConfigService.getRandomStationMasters();

    this.randomPlayerBuildings =
      this.applicationConfigService.getRandomPlayerBuildings();

    this.randomCities = this.applicationConfigService.getRandomCities();
  }
}
