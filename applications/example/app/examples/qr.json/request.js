module.exports = function(client, callback) {
    var fileName = 'qr.png';
    client.res.setHeader('Content-Description', 'File Transfer');
    client.res.setHeader('Content-Disposition', 'attachment; filename="'+fileName+'"');
    //client.res.setHeader('Content-Transfer-Encoding', 'binary');
    client.res.setHeader('Expires', 0);
    client.res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
    client.res.setHeader('Pragma', 'no-cache');
    client.res.setHeader('Content-Type', 'image/png');

    var qr = application.qr.image('text');

    qr.on('data', function(chunk) {
        client.res.write(chunk);
    });

    qr.on('end', function() {
        client.res.end();
        callback();
    });
}