import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { ShellComponent } from './shell/shell.component';


const modules = [CommonModule, MatButtonModule]
const components = [ShellComponent]

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [...components, ...modules]
})
export class SharedModule { }
