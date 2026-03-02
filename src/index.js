const { formatName, formatDate, isPresent, log } = require('./utils');

/**
 * Bootstraps the auth service and emits structured startup logs.
 */
function bootstrap() {
  const serviceName = 'Auth Service';
  const startedAt = formatDate(new Date());

  log('info', 'Service starting', { service: serviceName, startedAt });

  if (!isPresent(serviceName)) {
    log('error', 'Service name must be defined');
    throw new Error('Service name must be defined');
  }

  log('info', 'Service ready', { service: formatName('Auth', 'Service') });
}

bootstrap();
