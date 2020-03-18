import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';

export default helper(function coalesce(params) {
    return isEmpty(params[0]) ? params[1] : params[0];
});
