import DS from 'ember-data';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default DS.RESTSerializer.extend(EmbeddedRecordsMixin, {
    serialize: function(record, options) {
        return this._super(record, {includeId: true});
    }
});
