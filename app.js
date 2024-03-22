const SMTPServer = require("smtp-server").SMTPServer;
const simpleParser = require('mailparser').simpleParser;

const options = {
    onData(stream, session, callback) {
        simpleParser(stream, {}, (err, parsed) => {
            if (err) {
                console.log("Error :", err);
            }
            console.log(parsed)
        })
        stream.on("end", callback);
    },
    disabledCommands: ['AUTH']
}
const server = new SMTPServer(options);

server.listen(25)