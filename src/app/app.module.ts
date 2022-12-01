import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { EditComponent } from './page/edit/edit.component';
import { ListCardComponent } from './componets/list-card/list-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit', component: EditComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

@NgModule({
  declarations: [AppComponent, HomeComponent, EditComponent, ListCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
