module.exports = function(client, callback) {
    var text = client.fields.message[0];
    var type = client.fields.file_type[0];
    var fileName = 'qr.' + type;

    client.res.setHeader('Content-Description', 'File Transfer');
    client.res.setHeader('Content-Disposition', 'attachment; filename="'+fileName+'"');
    client.res.setHeader('Expires', 0);
    client.res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
    client.res.setHeader('Pragma', 'no-cache');

    var qr = application.qr.image(text, { type: type });
    qr.pipe(client.res);
}