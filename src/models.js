var users = [];
function createUser(user) {
    users.push(user);
    console.log("User created:", user);
}
function getUserById(id) {
    return users.find(function (user) { return user.id === id; });
}
function getAllUsers() {
    return users;
}
function updateUser(id, updatedFields) {
    var user = users.find(function (user) { return user.id === id; });
    if (user) {
        Object.assign(user, updatedFields);
        console.log("User updated:", user);
    }
    else {
        console.log("User not found");
    }
}
function deleteUser(id) {
    users = users.filter(function (user) { return user.id !== id; });
    console.log("User deleted:", id);
}
createUser({ id: 1, name: "Pius", email: "pius@example.com" });
createUser({ id: 2, name: "Brian", email: "brian@example.com" });
console.log(getUserById(1));
console.log(getAllUsers());
updateUser(1, { name: "Pius" });
deleteUser(2);
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.nextId = 1;
    }
    // CREATE
    TaskManager.prototype.createTask = function (title, description) {
        var newTask = {
            id: this.nextId++,
            title: title,
            description: description,
            completed: false,
        };
        this.tasks.push(newTask);
        return newTask;
    };
    // READ (all tasks)
    TaskManager.prototype.getAllTasks = function () {
        return this.tasks;
    };
    // READ (single task)
    TaskManager.prototype.getTaskById = function (id) {
        return this.tasks.find(function (task) { return task.id === id; });
    };
    // UPDATE
    TaskManager.prototype.updateTask = function (id, updatedFields) {
        var task = this.getTaskById(id);
        if (!task)
            return undefined;
        Object.assign(task, updatedFields);
        return task;
    };
    // DELETE
    TaskManager.prototype.deleteTask = function (id) {
        var index = this.tasks.findIndex(function (task) { return task.id === id; });
        if (index === -1)
            return false;
        this.tasks.splice(index, 1);
        return true;
    };
    return TaskManager;
}());
var manager = new TaskManager();
// CREATE
var task1 = manager.createTask("Study TypeScript", "Finish CRUD operations");
console.log("Created:", task1);
// READ
console.log("All Tasks:", manager.getAllTasks());
console.log("Get by ID (1):", manager.getTaskById(1));
// UPDATE
var updated = manager.updateTask(1, { completed: true });
console.log("Updated:", updated);
// DELETE
var isDeleted = manager.deleteTask(1);
console.log("Deleted:", isDeleted);
console.log("All Tasks after delete:", manager.getAllTasks());
