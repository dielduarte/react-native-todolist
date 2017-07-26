import React, { PureComponent } from 'react';
import {
  View,
  Switch,
  Alert,
  TouchableHighlight
} from 'react-native';
import {
  TaskRow,
  TaskTitle
} from './Ui';

import FirebaseService from '../../services/Firebase';

export default class Task extends PureComponent {
  deleteTask(id) {
    Alert.alert(
      'Remove task',
      'Are you sure you want to delete this item?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => FirebaseService.deleteTask(id)},
      ]
    );
  }

  render() {
    const { task } = this.props;

    return (
      <TouchableHighlight underlayColor="#ccc" onPress={() => this.deleteTask(task.id)}>
        <TaskRow>
          <TaskTitle> {task.name} </TaskTitle>
          <Switch
            onTintColor={'#f04e23'}
            tintColor={'#aaa'}
            value={task.done}
            onValueChange={(value) => FirebaseService.updateTask(task.id, task.name, value)}
          />
        </TaskRow>
      </TouchableHighlight>
    );
  }
}
