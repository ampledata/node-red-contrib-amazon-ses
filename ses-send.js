var AmazonSES = require('node-ses'),
mailcomposer = require('mailcomposer');

var _internals = {};

_internals.send = function (payload, callback) {
    
    var uri = 'https://email.' + payload.api_region + '.amazonaws.com';
    var ses = AmazonSES.createClient({key:payload.api_key, secret:payload.api_secret, amazon:uri});

    var mail = mailcomposer(payload);
    mail.build(function(err, message){
        var msg = message.toString();

        if (err) {
            callback(err);
        } else {
            ses.sendRawEmail({from:payload.from, rawMessage:msg}, function(err, data, res){
                callback(err?err.Message:null,data);
            });
        }
    });

};


module.exports = function(RED) {
    'use strict';

    function Node(n) {
      
        RED.nodes.createNode(this,n);

        var node = this;
        

        this.on('input', function (msg) {
            
            
            var payload = typeof msg.payload === 'object' ? msg.payload : {};
        
            var attrs = ['api_key','api_secret', 'api_region','from','to','subject','html'];
            for (var attr of attrs) {
                if (n[attr]) {
                    payload[attr] = n[attr];     
                }
            }

            _internals.send(payload, function(err, result){
                if (err) {
                    node.error(err, msg);
                } else {
                    payload.result = result || 'success';
                    msg.payload = payload;
                    node.send(msg);
                }
            });
        });
    }

    RED.nodes.registerType('ses-send', Node);
};
