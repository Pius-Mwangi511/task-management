class User {
    constructor(public id: number, public name: string, public age: number){}
}

class Task {
    constructor(
        public id: number,
        public title: string,
        public assignedTo?: number  
    ){}
}

class UserService {
    private users: User[] =  [];
    private generateID: number = 1;

    createUser(name: string, age: number): User{
        const user = new User(this.generateID++, name, age);
        this.users.push(user);
        return user;
    }

    getAllUsers(): User[]{
        return this.users;
    }

    getUserByID(id: number): User | undefined{
        return this.users.find(user => user.id === id);
    }

    getUsersByAge(age: number): User[] | undefined {
        return this.users.filter(user => user.age === age);
    }

    updateUser(id: number, updateDetails: {name: string, age: number}): boolean {
        const user = this.getUserByID(id);
        if(user) {
            user.name = updateDetails.name;
            user.age = updateDetails.age;
            return true;
        }
        return false;
    }

    deleteUser(id: number): boolean{
        const userIndex = this.users.findIndex(user => user.id === id);
        if(userIndex !== -1){
            this.users.splice(userIndex, 1);
            return true;
        }

        return false;
    }
}

class TaskService {
    private tasks: Task[] = [];
    private generateID: number = 1;

    createTask(title: string): Task{
        const task = new Task(this.generateID++, title);
        this.tasks.push(task);
        return task;
    }

    getAllTasks(): Task[]{
        return this.tasks;
    }

    getTaskByID(id: number): Task | undefined {
        const taskFound = this.tasks.find(task => task.id === id);
        if(taskFound){
            return {
                id: taskFound.id,
                title: taskFound.title,
            }
        }
    }

    updateTask(id: number, newTitle: string) : boolean {
        const task = this.getTaskByID(id);
        if (task) {
          task.title = newTitle;
          return true;
        }
        return false;
      }
    
      deleteTask(id: number): boolean {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
          this.tasks.splice(taskIndex, 1);
          return true;
        }
        return false;
      }
    
      assignTask(taskId: number, userId: number): boolean {
        const task = this.getTaskByID(taskId);
        if (task) {
          task.assignedTo = userId;
          return true;
        }
        return false;
      }
    
      unassignTask(taskId: number): boolean {
        const task = this.getTaskByID(taskId);
        if (task) {
          task.assignedTo = undefined;
          return true;
        }
        return false;
      }
    
      getTasksByUser(userId: number): Task[] {
        return this.tasks.filter(task => task.assignedTo === userId);
      }
}



const userService = new UserService();

const user1 = userService.createUser("pius", 7);
const user2 = userService.createUser("Brian", 24);
const user3 = userService.createUser("Teresa", 19);
const user4 = userService.createUser("Elon", 54);

const taskService = new TaskService();

const task1 = taskService.createTask("collect data");
const task2 = taskService.createTask("organize and clean data");
const task3 = taskService.createTask("Analyze the clean data");
const task4 = taskService.createTask("do data visualization with tableau");


console.info("All Users:", userService.getAllUsers());
console.log("");
console.info("All Tasks: ", taskService.getAllTasks())

console.info("Tasks Assigned to: ", user1.name , "-", taskService.getTaskByID(user1.id));
