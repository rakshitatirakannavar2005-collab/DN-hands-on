import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})

export class CourseCard implements OnChanges {

  @Input() course!: {
    id: number;
    name: string
    code: string
    credits: number;
    enrolled: boolean;
    gradeStatus: string;
  };

@Output() enroll = new EventEmitter<string>();

onEnroll() {
  this.enroll.emit(this.course.name);
}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course  changed:', changes['course']);
  }

}