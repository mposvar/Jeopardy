import Service from '@ember/service';
import { inject as injectService } from '@ember/service';
import { guidFor } from '@ember/object/internals';
import { later } from '@ember/runloop';

export default class extends Service {
    @injectService() store;
    @injectService('socket-io') socketIo;

    activeSocket = null;

    uniqueId = null;

    initialize() {
        this.set('uniqueId', guidFor(this));
        this._initializeSocketIo();
    }

    _initializeSocketIo() {
        const socket = this.socketIo.socketFor('http://localhost:4300');
        socket.on('connect', this.onConnect, this);
        socket.on('modelUpdated', this.onModelUpdated, this);
        socket.on('close', this.onReconnect, this);

        this.set('activeSocket', socket);
    }

    onReconnect() {
        later(this, () => {
            this.activeSocket.reconnect();
        }, 1000);
    }

    onConnect() {
        this.activeSocket.send('Hello World');
    }

    onModelUpdated(payload) {
        this.store.pushPayload(payload);
    }

    willDestroyElement() {
        super.willDestroyElement();

        this.activeSocket.off('connect', this.onConnect);
        this.activeSocket.off('modelUpdated', this.onModelUpdated);
        this.activeSocket.off('close', this.onReconnect);
    }
}
