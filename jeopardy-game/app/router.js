import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('game-state', { path: '/:game_state_id' }, function() {
    this.route('operate');
    this.route('play');
  });
  this.route('games', function() {
    this.route('game', { path: '/:game_id' }, function() {
      this.route('start');
      this.route('edit');
    });
  });
});

export default Router;
