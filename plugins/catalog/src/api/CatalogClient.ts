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

import { CatalogApi } from './types';
import { DescriptorEnvelope } from '../types';

export class CatalogClient implements CatalogApi {
  private apiOrigin: string;
  private basePath: string;
  constructor({
    apiOrigin,
    basePath,
  }: {
    apiOrigin: string;
    basePath: string;
  }) {
    this.apiOrigin = apiOrigin;
    this.basePath = basePath;
  }
  async getEntities(): Promise<DescriptorEnvelope[]> {
    const response = await fetch(`${this.apiOrigin}${this.basePath}/entities`);
    return await response.json();
  }
  async getEntityByName(name: string): Promise<DescriptorEnvelope> {
    const response = await fetch(
      `${this.apiOrigin}${this.basePath}/entities/by-name/Component/default/${name}`,
    );
    const entity = await response.json();
    if (entity) return entity;
    throw new Error(`'Entity not found: ${name}`);
  }
}
