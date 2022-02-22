const binanceService = require('../services/binance.service');
const exchangeConstants = require('../constants/exchange.constants');

const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          remoteId: { type: 'number' },
          timestamp: { type: 'number' }
        }
      }
    }
  }
}

module.exports = async function (fastify) {
  fastify.post('/', opts, async function (request, reply) {
    const { exchange, marketId, side, price, quantity } = request.body;
    
    if (exchange === exchangeConstants.service.BINANCE) {
      const result = binanceService.placeOrder(marketId, side, price, quantity);
      return reply.send(result);
    }
  
    reply.send({
      stats: 'error',
      message: 'Exchange not supported'
    })
  })
}
