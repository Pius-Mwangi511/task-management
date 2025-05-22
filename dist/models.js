"use strict";
let users = [];
function createUser(user) {
    users.push(user);
    console.log("User created:", user);
}
function getUserById(id) {
    return users.find(user => user.id === id);
}
function getAllUsers() {
    return users;
}
function updateUser(id, updatedFields) {
    const user = users.find(user => user.id === id);
    if (user) {
        Object.assign(user, updatedFields);
        console.log("User updated:", user);
    }
    else {
        console.log("User not found");
    }
}
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    console.log("User deleted:", id);
}
createUser({ id: 1, name: "Pius", email: "pius@example.com" });
createUser({ id: 2, name: "Brian", email: "brian@example.com" });
let tasks = [];
function createTask(id, title) {
    const newTask = {
        id,
        title,
    };
    tasks.push(newTask);
    return newTask;
}
function getAllTasks() {
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
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
}
const task1 = createTask(1, "analyze data");
const task2 = createTask(2, "clean data");
console.log(getAllTasks());
//const updated = updateTask(task1.id, "Learn TypeScript deeply");
// const deleted = deleteTask(task2.id);
console.log(getAllTasks());
//ASSIGHNING TASK
class TaskAssigner {
    constructor() {
        this.assignments = new Map();
    }
    // Map<userId, array of taskIds>
    assignTaskToUser(userId, taskId) {
        if (!getUserById(userId)) {
            console.log(`User with id ${userId} does not exist.`);
            return;
        }
        if (!getTaskById(taskId)) {
            console.log(`Task with id ${taskId} does not exist.`);
            return;
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
    unassignTaskFromUser(userId, taskId) {
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
            //   } else {
            //     console.log(`Task ${taskId} is not assigned to user ${userId}`);
        }
    }
}
const taskAssigner = new TaskAssigner();
taskAssigner.assignTaskToUser(1, 1); // Assign task 1 to user 1
taskAssigner.assignTaskToUser(2, 2); // Assign task 2 to user 1
console.log(taskAssigner.getTasksForUser(1)); // List tasks assigned to user 1
taskAssigner.unassignTaskFromUser(1, 2); // Remove task 2 from user 1
console.log(taskAssigner.getTasksForUser(1)); // Check tasks again
//# sourceMappingURL=models.js.map