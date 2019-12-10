import ApplicationSerializer from '../application/serializer';


export default ApplicationSerializer.extend({
    attrs: {
        categories: { deserialize: 'records', serialize: false },
        answerRows: { deserialize: 'records', serialize: false }
    }
});
