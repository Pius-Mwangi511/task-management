"use strict";
class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Task {
    constructor(id, title, assignedTo) {
        this.id = id;
        this.title = title;
        this.assignedTo = assignedTo;
    }
}
class UserService {
    constructor() {
        this.users = [];
        this.generateID = 1;
    }
    createUser(name, age) {
        const user = new User(this.generateID++, name, age);
        this.users.push(user);
        return user;
    }
    getAllUsers() {
        return this.users;
    }
    getUserByID(id) {
        return this.users.find(user => user.id === id);
    }
    getUsersByAge(age) {
        return this.users.filter(user => user.age === age);
    }
    updateUser(id, updateDetails) {
        const user = this.getUserByID(id);
        if (user) {
            user.name = updateDetails.name;
            user.age = updateDetails.age;
            return true;
        }
        return false;
    }
    deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }
}
class TaskService {
    constructor() {
        this.tasks = [];
        this.generateID = 1;
    }
    createTask(title) {
        const task = new Task(this.generateID++, title);
        this.tasks.push(task);
        return task;
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskByID(id) {
        const taskFound = this.tasks.find(task => task.id === id);
        if (taskFound) {
            return {
                id: taskFound.id,
                title: taskFound.title,
            };
        }
    }
    updateTask(id, newTitle) {
        const task = this.getTaskByID(id);
        if (task) {
            task.title = newTitle;
            return true;
        }
        return false;
    }
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }
    assignTask(taskId, userId) {
        const task = this.getTaskByID(taskId);
        if (task) {
            task.assignedTo = userId;
            return true;
        }
        return false;
    }
    unassignTask(taskId) {
        const task = this.getTaskByID(taskId);
        if (task) {
            task.assignedTo = undefined;
            return true;
        }
        return false;
    }
    getTasksByUser(userId) {
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
console.info("All Tasks: ", taskService.getAllTasks());
console.info("Tasks Assigned to: ", user1.name, "-", taskService.getTaskByID(user1.id));
//# sourceMappingURL=models.js.map