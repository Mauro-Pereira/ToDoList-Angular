import { Component } from '@angular/core';
import { TaskModalComponent } from "../task-modal/task-modal.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [TaskModalComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

  isModalOpen: boolean = false;
  isEditMode: boolean = false;
  selectedTask: any = { title: '', expirationDate: '', description: '' };
  tasks: any[] = [];

  // Abre o modal para criar uma nova tarefa
  openModal() {
    this.isModalOpen = true;
    this.isEditMode = false;
    this.selectedTask = { title: '', expirationDate: '', description: '' };
  }

  // Abre o modal para editar uma tarefa existente
  editTask(task: any) {
    this.isModalOpen = true;
    this.isEditMode = true;
    this.selectedTask = { ...task };
  }

  // Fecha o modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Manipula o envio do formulário
  handleSubmit(task: any) {
    if (this.isEditMode) {
      // Atualiza a tarefa existente
      const index = this.tasks.findIndex((t) => t === this.selectedTask);
      this.tasks[index] = task;
    } else {
      // Adiciona uma nova tarefa
      this.tasks.push(task);
    }
    this.closeModal();
  }



}
