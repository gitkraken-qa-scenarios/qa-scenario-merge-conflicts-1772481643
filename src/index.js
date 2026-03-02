const { formatName, formatDate, isPresent, sanitizeInput } = require('./utils');

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

  // Demonstrate input sanitization on startup
  const rawInput = '  <script>alert("xss")</script>Hello, World!  ';
  const clean = sanitizeInput(rawInput);
  console.log(`Sanitized input demo: "${clean}"`);

  console.log(`Service: ${formatName('Auth', 'Service')}`);
  console.log('Status: ready');
}

bootstrap();
