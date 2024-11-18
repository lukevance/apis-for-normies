// transactionsClient.js
const axios = require('axios');

class TransactionsClient {
    constructor(baseURL = process.env.API_BASE_URL) {
    if (!baseURL) {
      throw new Error('Base URL is required');
    }
    this.api = axios.create({
      baseURL,
    });
  }

  async createTransaction(transactionData) {
    if (!transactionData.transactionId || !transactionData.userId) {
      throw new Error('transactionId and userId are required');
    }

    try {
      const response = await this.api.post('/transactions', transactionData);
      return response.data;
    } catch (error) {
      console.error('Error creating transaction:', error);
      throw new Error('Error creating transaction');
    }
  }

  async getTransactionById(transactionId, userId) {
    if (!transactionId || !userId) {
      throw new Error('transactionId and userId are required');
    }

    try {
      const response = await this.api.get(`/transactions/${transactionId}`, {
        params: { userId },
      });
      return response.data;
    } catch (error) {
      console.error('Error retrieving transaction by transactionId:', error);
      throw new Error('Error retrieving transaction by transactionId');
    }
  }

  async updateTransactionById(transactionId, updatedData) {
    if (!updatedData.userId || !updatedData.splitToken) {
      throw new Error('splitToken and userId are required');
    }

    try {
      const response = await this.api.patch(`/transactions/${transactionId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Error updating transaction:', error);
      throw new Error('Error updating transaction');
    }
  }
}

module.exports = TransactionsClient;
