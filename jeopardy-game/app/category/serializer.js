import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
    attrs: {
        answers: { deserialize: 'records', serialize: false }
    }
});
