import moment from 'moment';
import 'moment/locale/ru';

const locale = 'ru';

moment.locale(locale);
moment.defaultFormat = 'YYYY-MM-DD';

export default moment;
