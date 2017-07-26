import firebase from 'firebase';
import { config }  from '../config/firebase.js';

class FirebaseService {
  constructor() {
    firebase.initializeApp(config);
  }

  createTask(name) {
    return firebase
            .database()
            .ref('tasks/')
            .push({
              "name": name,
              "done": false
            });
  }

  oberserverTasks(cb) {
    firebase
      .database()
      .ref('tasks/')
      .on("value", function(snapshot) {
        cb(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
  }

  deleteTask(id) {
    return firebase
      .database()
      .ref(`tasks/${id}`)
      .remove();
  }

  updateTask(id, name, done) {
    return firebase
      .database()
      .ref(`tasks/${id}`)
      .set({ name, done });
  }
}

export default new FirebaseService();
