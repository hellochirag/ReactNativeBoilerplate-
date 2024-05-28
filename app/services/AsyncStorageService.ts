import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageService, AuthData} from '../interface';
import {StorageKeys} from '../constants';

export class AsyncStorageService implements StorageService {
  private _prefix = 'mobeye_';

  async setAuthData(authData: AuthData): Promise<void> {
    await this._setItem(StorageKeys.AUTH_DATA, JSON.stringify(authData));
  }

  async getAuthData(): Promise<AuthData> {
    const authData = await this._getItem(StorageKeys.AUTH_DATA);
    return JSON.parse(authData) as AuthData;
  }

  async removeAuthData(): Promise<void> {
    await this._removeItem(StorageKeys.AUTH_DATA);
  }

  private async _getItem(key: StorageKeys): Promise<string> {
    try {
      const value = await AsyncStorage.getItem(this._prefix + key);
      return value || null;
    } catch (err) {
      return null;
    }
  }

  private async _setItem(key: StorageKeys, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(this._prefix + key, value);
    } catch (err) {
      console.log(err);
    }
  }

  private async _removeItem(key: StorageKeys): Promise<void> {
    try {
      await AsyncStorage.removeItem(this._prefix + key);
    } catch (err) {
      console.log(err);
    }
  }
}
