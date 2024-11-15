// types/user.ts
export interface UserData {
    userId: string;
    displayName: string;
    email: string;
    userAgent: string;
    ipAddress: string;
    loginTimestamp: number;
    logoutTimestamp?: number;
    subscriptionType: 'premium' | 'basic';
    subscriptionStartDate: number;
    subscriptionEndDate: number;
    paymentMethodId: string;
    billingAddress: string;
    lastActiveTimestamp: number;
    loginHistory: { timestamp: number; userAgent: string; ipAddress: string }[];
    pastPapersSolved: number;
    pastPrepAIUsage: number;
  }