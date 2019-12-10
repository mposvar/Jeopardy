import ApplicationSerializer from '../application/serializer';


export default ApplicationSerializer.extend({
    attrs: {
        teams: { embedded: 'always' },
    }
});
