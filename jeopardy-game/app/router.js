import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('game', { path: '/games/:game_state_id' }, function() {
    this.route('operate');
    this.route('play');
  });

  this.route('board', function() {
    this.route('create');
    this.route('manage', { path: '/:game_id'});
    this.route('create-game', { path: '/:game_id/create-game' });
  });
});

export default Router;
