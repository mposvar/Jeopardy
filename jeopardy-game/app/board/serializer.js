import ApplicationSerializer from '../application/serializer';

export default class extends ApplicationSerializer {
    attrs = {
        prices: { deserialize: 'records', serialize: false }
    }
}