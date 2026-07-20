import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { beforeEach, describe, expect, it } from 'vitest';

import { HomeComponent } from './home.component';
import { GwtArgConfigService } from '../shared/gwt-arg-config.service';
import { LocalStorageService } from '../shared/local-storage.service';

const breakpointObserverMock = {
    observe: () => of({ matches: false }),
};

const localStorageServiceMock = {
    getNumber: () => null,
    setNumber: () => undefined,
};

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        TestBed.overrideComponent(HomeComponent, {
            set: {
                template: '',
            },
        });

        await TestBed.configureTestingModule({
            imports: [HomeComponent],
            providers: [
                GwtArgConfigService,
                { provide: BreakpointObserver, useValue: breakpointObserverMock },
                { provide: LocalStorageService, useValue: localStorageServiceMock },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
