interface User {
    id: number;
    name: string;
    email: string;
  }
  let users: User[] = [];
  function createUser():void {
    const idInput = document.getElementById('userId') as HTMLInputElement;
    const nameInput = document.getElementById('userName') as HTMLInputElement;
    const emailInput = document.getElementById('userEmail') as HTMLInputElement;

    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const email = emailInput.value;
    const user: User = { id, name, email };
    users.push(user);
    console.log("User created:", user);
  }
  function getUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
  }
  
  function getAllUsers(): User[] {
    document.getElementById('getallUsers');
    console.log(users);
    return users;
    
  }
  function updateUser( updatedFields: Partial<User>): void {
    const idInput = document.getElementById('userId') as HTMLInputElement;
    const nameInput = document.getElementById('userName') as HTMLInputElement;
      const emailInput = document.getElementById('userEmail') as HTMLInputElement;
  
      const id = parseInt(idInput.value);
      const name = nameInput.value;
      const email = emailInput.value;
    const user = users.find(user => user.id === id);
    if (user) {
      Object.assign(user, updatedFields);
      console.log("User updated:", user);
    } else {
      console.log("User not found");
    }
  }
  function deleteUser(): void {
    const idInput = document.getElementById('userId') as HTMLInputElement;
  const nameInput = document.getElementById('userName') as HTMLInputElement;
    const emailInput = document.getElementById('userEmail') as HTMLInputElement;

    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const email = emailInput.value;
    const user: User = { id,name, email };
    users = users.filter(user => user.id !== id);
    console.log("User deleted:", id);
  }
// createUser({ id: 1, name: "Pius", email: "pius@example.com" });
// createUser({ id: 2, name: "Brian", email: "brian@example.com" });

// console.log(getUserById(1));
// console.log(getAllUsers());
// updateUser(1, { name: "Pius" });
// deleteUser(2);

//task code

interface Task {
    id: number;
    title: string;
  }
  let tasks: Task[] = [];
  function createTask():void{
    document.getElementById('createTaskBtn')?.addEventListener('click', createTask);
    const idInput = document.getElementById('taskId') as HTMLInputElement;
    const nameInput = document.getElementById('taskTitle') as HTMLInputElement;

    const id = parseInt(idInput.value);
    const title = nameInput.value;
    const newTask: Task = {id, title,}; 
    tasks.push(newTask);
    console.log("User created:", newTask);
    //return newTask;
  }
  function getAllTasks(): Task[] {
    document.getElementById('getalltasks');
    console.log(tasks);
    return tasks;
  }
  
  function getTaskById(id: number): Task | undefined {
    return tasks.find(task => task.id === id);
  }
  function updateTask(id: number, newTitle: string): Task | null {
    const task = tasks.find(task => task.id === id);
    if (task) {
      task.title = newTitle;
      return task;
    }
    return null;
  }
  function deleteTask(): void {
    document.getElementById('deleteTaskBtn')?.addEventListener('click', createTask);
    const idInput = document.getElementById('taskId') as HTMLInputElement;
    const nameInput = document.getElementById('taskTitle') as HTMLInputElement;

    const id = parseInt(idInput.value);
    const title = nameInput.value;
    const newTask: Task = {id, title,}; 
    const index = tasks.findIndex(task => task.id === id);
      tasks.splice(index, 1);
      console.log("User deleted:", id);
  }
  // const task1 = createTask(1,"analyze data");
  // const task2 = createTask(2,"clean data");
  
  console.log(getAllTasks());
  
  //const updated = updateTask(task1.id, "Learn TypeScript deeply");
  // const deleted = deleteTask(task2.id);
   console.log(getAllTasks());

   //ASSIGNING TASK
   class TaskAssigner {
    private assignments: Map<number, number[]> = new Map(); 
    
    assignTaskToUser(): void {
    //document.getElementById('assignTaskBtn');
    const idtask = document.getElementById('assignTaskId') as HTMLInputElement;
    const iduser = document.getElementById('assignUserId') as HTMLInputElement;

    const userId = parseInt(idtask.value);
    const taskId = parseInt(iduser.value);
      if (!getUserById(userId)) {
        console.log(`User with id ${userId} does not exist.`);
        
      }
      if (!getTaskById(taskId)) {
        console.log(`Task with id ${taskId} does not exist.`);
        
      }
      const userTasks = this.assignments.get(userId) || [];
      if (!userTasks.includes(taskId)) {
        userTasks.push(taskId);
        this.assignments.set(userId, userTasks);
        console.log(`Assigned task ${taskId} to user ${userId}`);
      } 
      else {
        console.log(`Task ${taskId} already assigned to user ${userId}`);
      }
    }

    getTasksForUser(userId: number): Task[] {
      const taskIds = this.assignments.get(userId) || [];
      return taskIds.map(id => getTaskById(id)!).filter(task => task !== undefined);
    }
  
    unassignTaskFromUser(): void {
      const idtask = document.getElementById('assignTaskId') as HTMLInputElement;
    const iduser = document.getElementById('assignUserId') as HTMLInputElement;

    const userId = parseInt(idtask.value);
    const taskId = parseInt(iduser.value);
      const userTasks = this.assignments.get(userId);
      if (!userTasks) {
        console.log(`User ${userId} has no tasks assigned.`);
        return;
      }
      const index = userTasks.indexOf(taskId);
      if (index > -1) {
        userTasks.splice(index, 1);
        this.assignments.set(userId, userTasks);
        console.log(`Unassigned task ${taskId} from user ${userId}`);

       }
    }
  }
  const taskAssigner = new TaskAssigner();
  document.getElementById('assignTaskBtn')?.addEventListener('click', () => taskAssigner.assignTaskToUser());
  document.getElementById('unassignTaskBtn')?.addEventListener('click', () => taskAssigner.unassignTaskFromUser());
  

 //taskAssigner.assignTaskToUser();  // Assign task 1 to user 1
// taskAssigner.assignTaskToUser(2, 2);  // Assign task 2 to user 1

// console.log(taskAssigner.getTasksForUser(1)); // List tasks assigned to user 1

// taskAssigner.unassignTaskFromUser(1, 2); // Remove task 2 from user 1
// console.log(taskAssigner.getTasksForUser(1)); // Check tasks again
