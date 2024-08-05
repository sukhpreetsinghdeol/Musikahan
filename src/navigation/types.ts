// src/navigation/types.ts
import { StackNavigationProp } from '@react-navigation/stack';

// Define your route parameters
export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  // Add other routes if needed
};

// Define the type for the navigation prop
export type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
