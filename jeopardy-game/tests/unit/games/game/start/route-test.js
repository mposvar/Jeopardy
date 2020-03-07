import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | games/game/start', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:games/game/start');
    assert.ok(route);
  });
});
