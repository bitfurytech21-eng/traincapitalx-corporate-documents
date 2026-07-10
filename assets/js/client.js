/*
=========================================
TrainCapitalX Client Manager
=========================================
*/

class ClientManager {

    static STORAGE = "tcx_clients";

    static getClients() {
        return JSON.parse(localStorage.getItem(this.STORAGE) || "[]");
    }

    static saveClients(clients) {
        localStorage.setItem(this.STORAGE, JSON.stringify(clients));
    }

    static add(client) {

        const clients = this.getClients();

        client.id = Date.now();

        clients.push(client);

        this.saveClients(clients);

    }

    static find(id) {

        return this.getClients().find(c => c.id == id);

    }

    static remove(id) {

        const clients = this.getClients()
            .filter(c => c.id != id);

        this.saveClients(clients);

    }

}