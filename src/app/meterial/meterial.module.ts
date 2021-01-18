import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
const material = [
  FlexLayoutModule,
  MatIconModule,
  MatInputModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  ScrollingModule,
  MatBadgeModule,
  MatMenuModule,
  MatSidenavModule,
  MatExpansionModule
]


@NgModule({
  exports: [material],
  imports: [material]
})
export class MeterialModule {

}
