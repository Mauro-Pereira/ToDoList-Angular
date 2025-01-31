import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-modal',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {

  @Input() isModalOpen: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() task: any = { title: '', expirationDate: '', description: '' };
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: [this.task.title, Validators.required],
      expirationDate: [this.task.expirationDate, Validators.required],
      description: [this.task.description],
    });
  }

  closeModal() {
    this.close.emit();
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.submit.emit(this.taskForm.value);
    }
  }

}
