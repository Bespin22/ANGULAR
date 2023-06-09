import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static encryptPassword(password: any) {
    throw new Error('Method not implemented.');
  }
  private readonly tokenKey = 'token';
  private readonly loginCredentialsKey = 'loginCredentials';
  private readonly encryptionKey = '206c10c99d6246f784005331e384df6d13e2056b2d0037bef81de611efb62e03'; // Replace with your encryption key

  login(username: string, password: string): Promise<any> {
    // Replace this with your actual API login implementation
    return new Promise((resolve, reject) => {
      // Simulate login request
      setTimeout(() => {
        const mockResponse = {
          token: 'mock-token'
        };
        resolve(mockResponse);
      }, 2000); // Simulate a 2-second delay for the API call
    });
  }

  storeLoginCredentials(username: string, password: string, rememberMe: boolean): void {
    // const encryptedPassword = this.encryptPassword(password);
    const loginCredentials = { username, password, rememberMe };
    localStorage.setItem(this.loginCredentialsKey, JSON.stringify(loginCredentials));
  }

  getLoginCredentials(): {
    username: string;
    password: string;
    rememberMe: boolean;
  } | null {
    const loginCredentialsString = localStorage.getItem(this.loginCredentialsKey);
    if (loginCredentialsString) {
      const loginCredentials = JSON.parse(loginCredentialsString);
      const decryptedPassword = this.decryptPassword(loginCredentials.password);
      return { username: loginCredentials.username, password: decryptedPassword, rememberMe: loginCredentials.rememberMe };
    }
    return null;
  }

  clearLoginCredentials(): void {
    localStorage.removeItem(this.loginCredentialsKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // private encryptPasswor(password: string): string {
  //   const encryptedPassword = CryptoJS.AES.encrypt(password, this.encryptionKey).toString();
  //   return encryptedPassword;
  // }
  
  private decryptPassword(encryptedPassword: string): string {
    const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, CryptoJS.enc.Hex.parse(this.encryptionKey),{
      mode:CryptoJS.mode.ECB
    });
    
    return decryptedPassword.toString(CryptoJS.enc.Utf8);
  }
  encrypt(data: string): string {
    const encryptedData = CryptoJS.AES.encrypt(data, CryptoJS.enc.Hex.parse(this.encryptionKey),{
      mode: CryptoJS.mode.ECB
    });
    return encryptedData.toString();
  }

  decrypt(encryptedData: string): string {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey);
    const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }
}
