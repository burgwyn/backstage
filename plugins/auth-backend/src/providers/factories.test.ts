/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import express from 'express';
import passport from 'passport';
import { OAuthProviderHandlers } from './types';
import { ProviderFactories } from './factories';

class MyCustomAuthProvider implements OAuthProviderHandlers {
  start(req: express.Request, options: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  strategy(): passport.Strategy {
    return new passport.Strategy();
  }
  handler(req: express.Request): Promise<any> {
    throw new Error('Method not implemented.');
  }
  refresh(refreshToken: string, scope: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

describe('getProviderFactory', () => {
  it('returns a provider if exists', () => {
    const provider = ProviderFactories.getProviderFactory('google');
    expect(provider).toBeDefined();
  });

  it('throws an error when provider implementation does not exist', () => {
    expect(() => {
      ProviderFactories.getProviderFactory('b');
    }).toThrow('Provider Implementation missing for : b auth provider');
  });
});
