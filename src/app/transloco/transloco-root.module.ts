import { provideTransloco, TranslocoModule } from '@jsverse/transloco';
import { isDevMode, NgModule } from '@angular/core';

import { TranslocoHttpLoader } from './transloco-loader';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['de'],
        defaultLang: 'de',
        fallbackLang: 'de',
        missingHandler: {
          // It will use the first language set in the `fallbackLang` property
          useFallbackTranslation: true,
        },
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class TranslocoRootModule {}
