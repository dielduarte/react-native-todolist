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
  Container
} from '../components';
import t from 'tcomb-form-native';

const Form = t.form.Form;

export default class FormTask extends PureComponent {
  static navigationOptions = {
    ...DEFAULT_HEADER_OPTIONS,
    headerTitle: 'New Task'
  };

  constructor(props) {
    super(props);

    this.Task = t.struct({
      name: t.String
    });

    this.options = {
      fields: {
        name: {
          error: 'Name is required for save new task.'
        }
      }
    };

    this.state = {
      value: {
        name: ''
      }
    };
  }

  createTask() {
    const taskForm = this.refs.form.getValue();

    if(taskForm) {
      const { navigate } = this.props.navigation;

      FirebaseService.createTask(taskForm.name)
        .then(result => {
          alert('task adicionada com sucesso!');
          this.setState({ value: null });
        });
    }
  }

  render() {
    return (
      <View>
        <FullView>
          <Container>
            <Form
              ref="form"
              type={this.Task}
              options={this.options}
              value={this.state.value}
            />
          </Container>
        </FullView>
        <Btn underlayColor="#053d4e" onPress={() => this.createTask()}>
          <BtnText>SAVE TASK</BtnText>
        </Btn>
      </View>
    );
  }
}
