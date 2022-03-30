const BASE_API = "https://todolist-vlasova.herokuapp.com/";

export class DataService {
    static async getTasks() {
        let response = await fetch(`${BASE_API}tasks`);
        return response.json();
    }

    static async addTask(task) {
        return fetch(`${BASE_API}tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
    }

    static async deleteTask(id) {
        return fetch(`${BASE_API}tasks/${id}`, {
            method: 'DELETE',
        });
    }

    static async updateTask(task) {
        return fetch(`${BASE_API}tasks/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
    }
}
