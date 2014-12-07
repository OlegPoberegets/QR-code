module.exports = function(client, callback) {
    var text = api.url.parse(client.req.url, true).query.to_encode;
    if(!text){
        callback();
    }else{
        var img = {};
        var qr = application.qr.image(text);
        client.res.setHeader('Content-Type', 'image/png');

        qr.pipe(client.res);
    }
}