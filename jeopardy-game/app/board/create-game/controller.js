import Controller from '@ember/controller';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';


export default class extends Controller {
    team1Name = null;
    team2Name = null;
    team3Name = null;
    team4Name = null;

    _addTeam(id, gameState) {
        let teamName = this.get(`team${id}Name`);

        if (!isEmpty(teamName)) {
            let team = this.store.createRecord('team', { name: teamName, points: 0 });
            team.set('name', teamName);
            gameState.teams.addObject(team);
        }
    }

    @action
    setTeam1Name(input) {
        this.set('team1Name', input);
    }

    @action
    setTeam2Name(input) {
        this.set('team2Name', input);
    }

    @action
    setTeam3Name(input) {
        this.set('team3Name', input);
    }

    @action
    setTeam4Name(input) {
        this.set('team4Name', input);
    }

    @action
    startGame() {
        let gameState = this.store.createRecord('game-state');

        gameState.set('game', this.model);

        this._addTeam(1, gameState);
        this._addTeam(2, gameState);
        this._addTeam(3, gameState);
        this._addTeam(4, gameState);

        if (gameState.teams.length < 2) {
            alert('You must have at least 2 teams');
        }
        else {
            gameState.save().then((savedGameState) => {
                savedGameState.get('teams').filterBy('isNew').invoke('unloadRecord');
                this.transitionToRoute('game.operate', savedGameState);
            });
        }
    }
}
