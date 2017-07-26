import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Switch,
  FlatList
} from 'react-native';

import { DEFAULT_HEADER_OPTIONS} from '../config/navigation';
import FirebaseService from '../services/Firebase';
import {
  FullView,
  Btn,
  BtnText,
  Task
} from '../components';

export default class Tasks extends PureComponent {
  static navigationOptions = {
    ...DEFAULT_HEADER_OPTIONS,
    headerTitle: 'Tasks'
  };

  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      tasksLenght: 0
    };

    this.updateTasks = this.updateTasks.bind(this);
    FirebaseService.oberserverTasks(this.updateTasks);
  }

  updateTasks(firebaseTasks) {
    if (firebaseTasks) {
      const firebaseTasksArray = Object.keys(firebaseTasks);

      const tasks = firebaseTasksArray.map(task => {
        firebaseTasks[task].id = task;
        return firebaseTasks[task];
      });

      this.setState({
        tasks,
        tasksLenght: firebaseTasksArray.length
      });
    } else {
      this.setState({
        tasks: [],
        tasksLenght: 0
      });
    }
  }

  renderEmptyMessage() {
    if (!this.state.tasksLenght) {
      return (
        <View>
          <Text>Your list is empty.</Text>
        </View>
      );
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <FullView>
          <FlatList
            data={this.state.tasks}
            extraData={this.state.tasksLenght}
            renderItem={({item}) => <Task task={item}/>}
            keyExtractor={(item, index) => index}
          />

          {this.renderEmptyMessage()}
        </FullView>
        <Btn underlayColor="#053d4e" onPress={() => navigate('FormTask')}>
          <BtnText>ADD NEW TASK</BtnText>
        </Btn>
      </View>
    );
  }
}
