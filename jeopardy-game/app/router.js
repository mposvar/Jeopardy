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
    this.route('manage', { path: '/:board_id'});
    this.route('create-game', { path: '/:board_id/create-game' });
    this.route('list');
  });
});

export default Router;
