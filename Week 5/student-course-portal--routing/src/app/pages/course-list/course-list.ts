import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard,CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList 
implements OnInit{
  courses = [
  {
    id: 1,
    name: 'Angular',
    code: 'ANG101',
    credits: 4,
    gradeStatus: 'passed',
    enrolled: true
  },
  {
    id: 2,
    name: 'Java',
    code: 'JAVA101',
    credits: 4,
    gradeStatus: 'failed',
    enrolled: false

  },
  {
    id: 3,
    name: 'SQL',
    code: 'SQL101',
    credits: 3,
    gradeStatus: 'pending',
    enrolled: false
  }
];
isLoading = false;

ngOnInit() {
  setTimeout(() => {
    this.isLoading = false;
  }, 1500);
}
trackByCourseId(index: number, course: any) {
  return course.id;
}
  selectedCourse = '';

onCourseEnroll(courseTitle: string) {
  this.selectedCourse = courseTitle;
}

}
