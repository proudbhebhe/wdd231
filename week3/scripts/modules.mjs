import byuICourse from './courses.mjs';
import { setSectionSelection } from './sections.mjs';
import {setTitle, renderSections} from './output.mjs';

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuICourse.changeEnrollment(sectionNum);
  renderSections(this.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuICourse.changeEnrollment(sectionNum, false);
  renderSections(this.sections);
});

setTitle(byuICourse);
setSectionSelection(byuICourse.sections);
renderSections(byuICourse.sections);