// transactionsClient.js
const axios = require('axios');

class TransactionsClient {
  constructor(baseURL = process.env.BASE_URL, userId = process.env.USER_ID) {
    if (!baseURL) {
      throw new Error('Base URL is required');
    }
    if (!userId) {
      throw new Error('User ID is required');
    }
    this.api = axios.create({
      baseURL,
    });
    this.userId = userId;
  }

  async createTransaction(transactionData) {
    if (!transactionData.transactionId) {
      throw new Error('transactionId is required');
    }
    transactionData.userId = transactionData.userId || this.userId;

    try {
      const response = await this.api.post('/transactions', transactionData);
      return response.data;
    } catch (error) {
      console.error('Error creating transaction:', error);
      throw new Error('Error creating transaction');
    }
  }

  async getTransactionById(transactionId) {
    if (!transactionId) {
      throw new Error('transactionId is required');
    }

    try {
      const response = await this.api.get(`/transactions/${transactionId}`, {
        params: { userId: this.userId },
      });
      return response.data;
    } catch (error) {
      console.error('Error retrieving transaction by transactionId:', error);
      throw new Error('Error retrieving transaction by transactionId');
    }
  }

  async updateTransactionById(transactionId, updatedData) {
    if (!updatedData.splitToken) {
      throw new Error('splitToken is required');
    }
    updatedData.userId = updatedData.userId || this.userId;

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

// Usage in an express app:
// const TransactionsClient = require('./transactionsClient');
// const transactionsClient = new TransactionsClient(process.env.BASE_URL, process.env.USER_ID);
// transactionsClient.createTransaction({ transactionId: '123' });


/* Return page EJS template */