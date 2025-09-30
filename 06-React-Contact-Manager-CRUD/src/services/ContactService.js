import axios from "axios";

export class ContactService {
  static serverUrl = "http://localhost:9000/contacts";

  static getAllContacts() {
    return axios.get(this.serverUrl);
  }

  static getContactById(contactId) {
    return axios.get(this.serverUrl + "/" + contactId);
  }

  static createContact(contact) {
    return axios.post(this.serverUrl, contact);
  }

  static updateContact(contact, contactId) {
    return axios.put(this.serverUrl + "/" + contactId, contact);
  }

  static deleteContact(contactId) {
    return axios.delete(this.serverUrl + "/" + contactId);
  }
}
