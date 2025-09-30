import axios from "axios";

export class GroupService {
  static serverUrl = "http://localhost:9000/groups";

  static getAllGroups() {
    return axios.get(this.serverUrl);
  }

  static getGroupById(groupId) {
    return axios.get(this.serverUrl + "/" + groupId);
  }
}
