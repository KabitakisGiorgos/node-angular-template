import * as path from 'path';
import * as errors from './errors/errors';

export default app => {
    // Insert routes below



    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors.pageNotFound);

    // All other routes should redirect to the index.html

    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.join(__dirname, '/../public', 'index.html'));
        });
};
