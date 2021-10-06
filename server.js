import {app} from './src/app';
import {port} from './src/config';

const listener = app.listen(port, () => {
    console.log(`✅ Listening on port ${listener.address().port}`);
});
