import createModule from 'client-core/lib/utils/createModule';
import reducer from './reducer';

export default createModule('tasks', reducer);
