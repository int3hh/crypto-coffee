import {Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from './index';

@Module({
  dynamic: true,
  store: Store,
  namespaced: true,
  name: 'AuthStore'
})

export default class AuthStoreModule extends VuexModule {
  public authToken = '';

  @Mutation
  public SET_AUTH_TOKEN(value: string) {
    this.authToken = value;
  }

  @Action
  public setAuthToken(value: string) {
    this.SET_AUTH_TOKEN(value);
  }
    
}

export const AuthStore = getModule(AuthStoreModule);
