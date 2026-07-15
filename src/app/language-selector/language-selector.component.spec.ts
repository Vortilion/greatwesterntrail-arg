import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoService } from '@jsverse/transloco';

import { LanguageSelectorComponent } from './language-selector.component';

const translocoServiceMock = {
    getAvailableLangs: () => ['en', 'de', 'pl'],
    isLang: () => true,
    setActiveLang: () => {},
    getDefaultLang: () => 'en',
    getActiveLang: () => 'en',
};

describe('LanguageSelectorComponent', () => {
    let component: LanguageSelectorComponent;
    let fixture: ComponentFixture<LanguageSelectorComponent>;

    beforeEach(async () => {
        TestBed.overrideComponent(LanguageSelectorComponent, {
            set: {
                template: '',
            },
        });

        await TestBed.configureTestingModule({
            imports: [LanguageSelectorComponent],
            providers: [{ provide: TranslocoService, useValue: translocoServiceMock }],
        }).compileComponents();

        fixture = TestBed.createComponent(LanguageSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
