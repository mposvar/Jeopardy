import ApplicationSerializer from '../application/serializer';

export default class extends ApplicationSerializer {
    attrs = {
        categories: { deserialize: 'records', serialize: false }
    }
}