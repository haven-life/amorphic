import * as AmorphicContext from '../AmorphicContext';
import * as persistor from '@havenlife/persistor';
import * as semotus from '@havenlife/semotus'
import * as url from 'url';
import * as Logger from '../utils/logger';
let getLoggingContext = Logger.getLoggingContext;
let setupLogger = Logger.setupLogger;
import {Request, Response} from 'express';

/**
 * Purpose unknown
 *
 * @param {unknown} req unknown
 * @param {unknown} res unknown
 */
export function processLoggingMessage(req: Request, res: Response) {
	let applicationConfig = AmorphicContext.applicationConfig;
	let path = url.parse(req.originalUrl, true).query.path as string;
	let session = req.session;
	let message = req.body;

	let persistableSemotableTemplate = (persistor as any)(null, null, semotus);

	// Should never actually execute this
	if (!session.semotus) {
		session.semotus = { controllers: {}, loggingContext: {} };
	}

	if (!session.semotus.loggingContext[path]) {
		session.semotus.loggingContext[path] = getLoggingContext(path, null);
	}

	// TODO why can't appConfig be taken out here?
	setupLogger(persistableSemotableTemplate.logger, path, session.semotus.loggingContext[path], applicationConfig);

	persistableSemotableTemplate.logger.setContextProps(message.loggingContext);

	persistableSemotableTemplate.logger.setContextProps({
		session: session.id,
		ipaddress:
			String(req.headers['x-forwarded-for'] || req.connection.remoteAddress)
				.split(',')[0]
				.replace(/(.*)[:](.*)/, '$2') || 'unknown'
	});

	message.loggingData.from = 'browser';
	persistableSemotableTemplate.logger[message.loggingLevel](message.loggingData);
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('');
}