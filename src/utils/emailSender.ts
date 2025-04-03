
import { toast } from 'sonner';

interface Result {
  principal: number;
  rate: number;
  time: number;
  interest: number;
  totalAmount: number;
  yearlyBreakdown: Array<{
    year: number;
    interest: number;
    balance: number;
  }>;
}

export const sendEmail = async (email: string, result: Result) => {
  // In a real application, this would connect to a backend service
  // For demo purposes, we'll simulate a successful email send after a delay
  return new Promise<void>((resolve, reject) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      reject(new Error('Invalid email address'));
      return;
    }
    
    setTimeout(() => {
      console.log('Email would be sent to:', email);
      console.log('With data:', result);
      
      // Simulate successful email sending
      if (Math.random() > 0.1) { // 90% success rate for demo
        resolve();
      } else {
        reject(new Error('Failed to send email'));
      }
    }, 1500);
  });
};
