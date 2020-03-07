import Controller from '@ember/controller';
import { action } from '@ember/object';
import { isNone } from '@ember/utils';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class extends Controller {
    @tracked selectedItem = null;

    initializeSelectedItem() {
        if (!isNone(this.model.activeAnswer)) {
            this.set('selectedItem', this.model.activeAnswer);
        }
    }

    @action
    selectCategory(category) {
        if (!this.model.displayedCategories.includes(category)) {
            this.model.displayedCategories.addObject(category);
            this.model.save();
        }
        this.set('selectedItem', category);
    }

    @action
    selectAnswer(answer) {
        if (!this.model.completedAnswers.includes(answer)) {
            this.model.set('activeAnswer', answer);
            this.model.save();
        }
        this.set('selectedItem', answer);
    }

    @action
    finishAnswer(team, answer) {
        this.model.completedAnswers.addObject(answer);
        this.model.set('activeAnswer', null);
        team.set('points', team.points + answer.price);
        this.model.save();
    }

    @action
    removePoints(team, answer) {
        team.set('points', team.points - answer.price);
        this.model.save();
    }

    @action
    resetGame() {
        this.model.set('displayedCategories', []);
        this.model.set('completedAnswers', []);
        this.model.get('teams').forEach((team) => {
            team.set('points', 0);
        });
        this.model.save();
    }

    @action
    removeCategory(category) {
        this.model.displayedCategories.removeObject(category);
        this.model.save();
    }

    @action
    unselectAnswer() {
        this.model.set('activeAnswer', null);
        this.model.save();
    }

    @action
    unfinishAnswer(answer) {
        this.model.completedAnswers.removeObject(answer);
        this.model.save();
    }

    @action
    setIsScoreboard(isScoreboard) {
        this.model.set('isScoreView', isScoreboard);
        this.model.save();
    }

    @action
    toggleIsThemeMusic() {
        this.model.set('isThemeMusic', this.model.isThemeMusic === false);
        this.model.save();
    }

    @action
    toggleIsThinking() {
        this.model.set('isThinking', this.model.isThinking === false);
        this.model.save();
    }

    @action
    playIsTimeUp() {
        this.model.set('isTimeUp', true);
        this.model.save().then(() => {
            later(() => {
                this.model.set('isTimeUp', false);
                this.model.save();
            }, 1000);
        });
    }
}
