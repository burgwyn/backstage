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
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('locations').del()
      .then(function () {
        // Inserts seed entries
        return knex('locations').insert([
          {id: 1, type: 'github', target: 'https://github.com/spotify/backstage/blob/master/plugins/catalog-backend/fixtures/one_component.yaml'},
          {id: 2, type: 'github', target: 'https://github.com/spotify/backstage/blob/master/plugins/catalog-backend/fixtures/one_component.yaml'},
          {id: 3, type: 'github', target: 'https://github.com/spotify/backstage/blob/master/plugins/catalog-backend/fixtures/one_component.yaml'}
        ]);
      });
  };
  