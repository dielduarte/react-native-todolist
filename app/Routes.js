import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Tasks from './pages/Tasks';
import FormTask from './pages/FormTask';

export const Routes = StackNavigator({
 	Tasks: { screen: Tasks },
 	FormTask: { screen: FormTask }
});
