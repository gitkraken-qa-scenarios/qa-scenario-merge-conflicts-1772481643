const { formatName, formatDate, isPresent } = require('./utils');

/**
 * Bootstraps the auth service and prints a startup summary.
 */
function bootstrap() {
  const serviceName = 'Auth Service';
  const startedAt = formatDate(new Date());

  console.log(`[${startedAt}] ${serviceName} starting up...`);

  if (!isPresent(serviceName)) {
    throw new Error('Service name must be defined');
  }

  console.log(`Service: ${formatName('Auth', 'Service')}`);
  console.log('Status: ready');
}

bootstrap();
