import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | board/manage', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:board/manage');
    assert.ok(controller);
  });
});
