import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MsgBubbleComponent } from './msg-bubble/msg-bubble.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar.component';
import { MsgListComponent } from './msg-list/msg-list.component';
import { AuthFormComponent} from "./auth-form/auth-form.component";
import { RecoverComponent } from './recover/recover.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule, Routes} from "@angular/router";
import {MatExpansionModule} from "@angular/material/expansion";
import { ContactTileComponent } from './contact-tile/contact-tile.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ProfileComponent } from './profile/profile.component';
import { SideToolbarComponent } from './side-toolbar/side-toolbar.component';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
/*
* todo : change ui on contact tiles
*   remove accordion and implement cards
*   user options will be showed as a menu
*   the menu's trigger will be a three dots button
*   located on the rightmost side of card
* */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recovery', component: RecoverComponent},
  { path: 'portal', component: AuthFormComponent},
  { path: 'profile', component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MsgBubbleComponent,
    BottomToolbarComponent,
    MsgListComponent,
    AuthFormComponent,
    RecoverComponent,
    ContactTileComponent,
    ProfileComponent,
    SideToolbarComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        RouterModule.forRoot(appRoutes),
        MatExpansionModule,
        MatCheckboxModule,
        HttpClientModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
