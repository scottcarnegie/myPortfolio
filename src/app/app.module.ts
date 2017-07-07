import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumeBodyComponent } from './resume-body/resume-body.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsSectionComponent } from './resume-body/skills-section/skills-section.component';
import { InterestsSectionComponent } from './resume-body/interests-section/interests-section.component';
import { EducationSectionComponent } from './resume-body/education-section/education-section.component';
import { ExperienceSectionComponent } from './resume-body/experience-section/experience-section.component';
import { SkillItemComponent } from './resume-body/skills-section/skill-item/skill-item.component';
import { LanguagesSectionComponent } from './resume-body/languages-section/languages-section.component';
import { ProgramComponentComponent } from './resume-body/education-section/program-component/program-component.component';
import { CourseComponentComponent } from './resume-body/education-section/course-component/course-component.component';
import { JobComponentComponent } from './resume-body/experience-section/job-component/job-component.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeBodyComponent,
    FooterComponent,
    SkillsSectionComponent,
    InterestsSectionComponent,
    EducationSectionComponent,
    ExperienceSectionComponent,
    SkillItemComponent,
    LanguagesSectionComponent,
    ProgramComponentComponent,
    CourseComponentComponent,
    JobComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
