import Transform from '@ember-data/serializer/transform';
import { A as EmberArray } from '@ember/array';
import { isEmpty } from '@ember/utils';

export default class extends Transform {
    deserialize(serialized) {
        return isEmpty(serialized) ? EmberArray() : EmberArray(serialized);
    }

    serialize(deserialized) {
        return isEmpty(deserialized) ? [] : deserialized.toArray();
    }
}
