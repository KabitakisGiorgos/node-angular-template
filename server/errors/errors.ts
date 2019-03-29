export function pageNotFound(req, res) {
    let statusCode = '404';
    res.status(statusCode).json('Page not Existent');
}