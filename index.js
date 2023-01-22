const express = require('express');
const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");

const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

Sentry.init({
    dsn: "https://298a9aa973e2431dba7b2c77cb47f5bb@o4504543523110912.ingest.sentry.io/4504543526518784",
    integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/app.html'));
});

app.post("/debug-sentry", function mainHandler(req, res) {
    const message = req.body.message;
    Sentry.captureException(message);
    res.statusCode = parseInt(req.body.error) + 500;
    throw new Error(message)
});

app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    if (res.statusCode > 500) {
        res.statusCode = 500;
    }
    res.end(res.sentry + "\n");
});

app.listen(PORT, () => console.log(`Listening on Port ${ PORT }`));
