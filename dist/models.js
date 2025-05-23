"use strict";
var _a, _b;
let users = [];
function createUser() {
    const idInput = document.getElementById('userId');
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const email = emailInput.value;
    const user = { id, name, email };
    users.push(user);
    console.log("User created:", user);
}
function getUserById(id) {
    return users.find(user => user.id === id);
}
function getAllUsers() {
    document.getElementById('getallUsers');
    console.log(users);
    return users;
}
function updateUser(updatedFields) {
    const idInput = document.getElementById('userId');
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const email = emailInput.value;
    const user = users.find(user => user.id === id);
    if (user) {
        Object.assign(user, updatedFields);
        console.log("User updated:", user);
    }
    else {
        console.log("User not found");
    }
}
function deleteUser() {
    const idInput = document.getElementById('userId');
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const email = emailInput.value;
    const user = { id, name, email };
    users = users.filter(user => user.id !== id);
    console.log("User deleted:", id);
}
let tasks = [];
function createTask() {
    var _a;
    (_a = document.getElementById('createTaskBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', createTask);
    const idInput = document.getElementById('taskId');
    const nameInput = document.getElementById('taskTitle');
    const id = parseInt(idInput.value);
    const title = nameInput.value;
    const newTask = { id, title, };
    tasks.push(newTask);
    console.log("User created:", newTask);
    //return newTask;
}
function getAllTasks() {
    document.getElementById('getalltasks');
    console.log(tasks);
    return tasks;
}
function getTaskById(id) {
    return tasks.find(task => task.id === id);
}
function updateTask(id, newTitle) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.title = newTitle;
        return task;
    }
    return null;
}
function deleteTask() {
    var _a;
    (_a = document.getElementById('deleteTaskBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', createTask);
    const idInput = document.getElementById('taskId');
    const nameInput = document.getElementById('taskTitle');
    const id = parseInt(idInput.value);
    const title = nameInput.value;
    const newTask = { id, title, };
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
    constructor() {
        this.assignments = new Map();
    }
    assignTaskToUser() {
        //document.getElementById('assignTaskBtn');
        const idtask = document.getElementById('assignTaskId');
        const iduser = document.getElementById('assignUserId');
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
    getTasksForUser(userId) {
        const taskIds = this.assignments.get(userId) || [];
        return taskIds.map(id => getTaskById(id)).filter(task => task !== undefined);
    }
    unassignTaskFromUser() {
        const idtask = document.getElementById('assignTaskId');
        const iduser = document.getElementById('assignUserId');
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
(_a = document.getElementById('assignTaskBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => taskAssigner.assignTaskToUser());
(_b = document.getElementById('unassignTaskBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => taskAssigner.unassignTaskFromUser());
//taskAssigner.assignTaskToUser();  // Assign task 1 to user 1
// taskAssigner.assignTaskToUser(2, 2);  // Assign task 2 to user 1
// console.log(taskAssigner.getTasksForUser(1)); // List tasks assigned to user 1
// taskAssigner.unassignTaskFromUser(1, 2); // Remove task 2 from user 1
// console.log(taskAssigner.getTasksForUser(1)); // Check tasks again
//# sourceMappingURL=models.js.map