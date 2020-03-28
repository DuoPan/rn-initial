import { AsyncStorage } from "react-native";
import * as SecureStore from 'expo-secure-store';

const useAsyncStorage = false;
const useSecureStorage = true;
const getPrefixedName = (name: string) => 'tanggram.' + name;

export async function saveInLocal(name: string, value: any): Promise<void> {
  if (useAsyncStorage) {
    return saveInAsyncStorage(name, value);
  } else if (useSecureStorage) {
    return saveInSecureStorage(name, value);
  }
}

export async function loadFromLocal(name: string): Promise<string|null> {
  if (useAsyncStorage) {
    return loadFromAsyncStorage(name);
  } else if (useSecureStorage) {
    return loadFromSecureStorage(name);
  }
}

export async function removeFromLocal(name: string): Promise<void> {
  if (useAsyncStorage) {
    return removeFromAsyncStorage(name);
  } else if (useSecureStorage) {
    return removeFromSecureStorage(name);
  }
}

async function saveInAsyncStorage(name: string, value: any): Promise<void> {
  await AsyncStorage.setItem(getPrefixedName(name), value);
}

async function loadFromAsyncStorage(name: string): Promise<string|null> {
  return await AsyncStorage.getItem(getPrefixedName(name));
}

async function removeFromAsyncStorage(name: string): Promise<void> {
  await AsyncStorage.removeItem(getPrefixedName(name));
}


async function saveInSecureStorage(name: string, value: any): Promise<void> {
  try {
    await SecureStore.setItemAsync(getPrefixedName(name), value);
  } catch (e) {
  }
}

async function loadFromSecureStorage(name: string): Promise<string> {
  try {
    return await SecureStore.getItemAsync(getPrefixedName(name));
  } catch {
    return Promise.resolve(null)
  }
}

async function removeFromSecureStorage(name: string): Promise<void> {
  await SecureStore.deleteItemAsync(getPrefixedName(name));
}
