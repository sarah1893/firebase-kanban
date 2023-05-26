import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ShellComponent } from './shell/shell.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "@angular/cdk/layout";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";

const modules = [CommonModule, 
                 MatButtonModule, 
                 MatSidenavModule, 
                 MatToolbarModule,
                 LayoutModule,
                 MatMenuModule,
                 MatListModule,
                 MatIconModule];
const components = [ShellComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})

export class SharedModule { }
