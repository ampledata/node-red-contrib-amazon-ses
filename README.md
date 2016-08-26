# Amazon SES for NodeRED

[![RedConnect Approved](https://img.shields.io/badge/RedConnect-Approved-brightgreen.svg?style=flat)](https://www.redconnect.io/addons) [![Gitter](https://img.shields.io/gitter/room/badges/shields.svg)](https://gitter.im/redconnect-io/redconnect)

An simple node that sends an email using Amazon's SES service.

## Installation

`npm install node-red-contrib-amazon-ses`

## Quick Start

You will need valid Amazon SES Access key & Secret.  You can get these [here](https://eu-west-1.console.aws.amazon.com/ses/). 

## Implemented Node

 * Send Email:
Expects a msg.payload object that matches the format outlined here:
```
{
    from : The e-mail address of the sender. All e-mail addresses can be plain 'sender@server.com' or formatted 'Sender Name <sender@server.com>', see here for details
    sender : An e-mail address that will appear on the Sender: field
    to : Comma separated list or an array of recipients e-mail addresses that will appear on the To: field
    cc : Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field
    bcc : Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field
    replyTo : An e-mail address that will appear on the Reply-To: field
    inReplyTo : The message-id this message is replying
    references : Message-id list (an array or space separated string)
    subject : The subject of the e-mail
    text : The plaintext version of the message as an Unicode string, Buffer, Stream or an object {path: '...'}
    html : The HTML version of the message as an Unicode string, Buffer, Stream or an object {path: '...'}
    watchHtml : Apple Watch specific HTML version of the message, same usage as with text and html
    icalEvent : iCalendar event, same usage as with text and html. Event method attribute defaults to 'PUBLISH' or define it yourself: {method: 'REQUEST', content: iCalString}. This value is added as an additional alternative to html or text. Only utf-8 content is allowed
    headers : An object or array of additional header fields (e.g. {"X-Key-Name": "key value"} or [{key: "X-Key-Name", value: "val1"}, {key: "X-Key-Name", value: "val2"}])
    attachments : An array of attachment objects (see below for details)
    alternatives : An array of alternative text contents (in addition to text and html parts) (see below for details)
    envelope : optional SMTP envelope, if auto generated envelope is not suitable (see below for details)
    messageId : optional Message-Id value, random value will be generated if not set
    date : optional Date value, current UTC string will be used if not set
    encoding : optional transfer encoding for the textual parts
    raw : if set then overwrites entire message output with this value. The value is not parsed, so you should still set address headers or the envelope value for the message to work
    textEncoding : set explicitly which encoding to use for text parts (quoted-printable or base64). If not set then encoding is detected from text content (mostly ascii means quoted-printable, otherwise base64)
}
```
For more details see [mailcomposer](https://github.com/nodemailer/mailcomposer)
