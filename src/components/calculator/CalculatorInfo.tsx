
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CalculatorInfo = () => {
  return (
    <Card className="mt-8 animate-fade-in border-mint-green/30">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-dark-green mb-4">Simple Interest Calculator: A Comprehensive Guide</h2>
        
        <div className="prose prose-green max-w-none">
          <p className="text-charcoal mb-4">
            Simple interest is a fundamental concept in finance that calculates interest on the initial principal only. 
            This straightforward method is common in various financial scenarios across India and globally, 
            making it essential to understand for effective financial planning.
          </p>
          
          <h3 className="text-xl font-semibold text-dark-green mt-6 mb-3">What is Simple Interest?</h3>
          <p className="text-charcoal mb-4">
            Simple interest is a quick method to calculate the interest charge on a loan or financial product. 
            It's calculated only on the initial principal amount, unlike compound interest which is calculated on 
            both the principal and accumulated interest. This makes it easier to predict and calculate over time.
          </p>
          
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1" className="border-mint-green/30">
              <AccordionTrigger className="text-dark-green font-semibold hover:text-mint-green">
                Common Uses of Simple Interest in India
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 my-3">
                  <li><strong>Fixed Deposits (FDs):</strong> Many banks in India offer FDs with simple interest, especially for short-term deposits.</li>
                  <li><strong>Savings Accounts:</strong> Some traditional savings accounts calculate interest using the simple interest method.</li>
                  <li><strong>Treasury Bills:</strong> Government-issued short-term debt securities often use simple interest calculations.</li>
                  <li><strong>Personal Loans:</strong> Some personal loans, particularly short-term ones, may use simple interest calculations.</li>
                  <li><strong>Education Loans:</strong> Certain educational institutions and finance companies offer student loans with simple interest structures.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-mint-green/30">
              <AccordionTrigger className="text-dark-green font-semibold hover:text-mint-green">
                Advantages of Simple Interest
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 my-3">
                  <li><strong>Transparency:</strong> Simple interest is easy to understand and calculate, making financial planning more straightforward.</li>
                  <li><strong>Predictability:</strong> The interest amount remains constant throughout the loan term, allowing for more predictable payments.</li>
                  <li><strong>Lower Cost for Borrowers:</strong> Generally, simple interest loans cost less than compound interest loans over the same period.</li>
                  <li><strong>Early Repayment Benefits:</strong> Paying off a simple interest loan early can significantly reduce the total interest paid.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-mint-green/30">
              <AccordionTrigger className="text-dark-green font-semibold hover:text-mint-green">
                How to Use This Calculator
              </AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-6 space-y-2 my-3">
                  <li><strong>Enter Principal Amount:</strong> Input the initial investment or loan amount in Indian Rupees (₹).</li>
                  <li><strong>Set Interest Rate:</strong> Use the slider to set the annual interest rate percentage.</li>
                  <li><strong>Define Time Period:</strong> Adjust the slider to set the investment or loan duration in years.</li>
                  <li><strong>View Results:</strong> See the calculated interest and total amount instantly.</li>
                  <li><strong>Analyze Charts:</strong> Examine the visual representation of your interest growth over time.</li>
                  <li><strong>Download or Email:</strong> Save your results as a PDF or send them to your email for future reference.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-mint-green/30">
              <AccordionTrigger className="text-dark-green font-semibold hover:text-mint-green">
                Real-World Applications in Indian Context
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 my-3">
                  <p><strong>Post Office Savings:</strong> India Post offers various savings schemes that use simple interest calculations, making them popular among conservative investors, particularly in rural areas.</p>
                  
                  <p><strong>Agricultural Loans:</strong> Many agricultural loans in India, especially those provided by cooperative banks, use simple interest models to make repayment easier for farmers.</p>
                  
                  <p><strong>Small Finance Institutions:</strong> Microfinance institutions and small finance banks often use simple interest models for their lending operations to make loans more accessible and understandable to underserved populations.</p>
                  
                  <p><strong>Senior Citizen Savings Scheme:</strong> This government-backed investment option for senior citizens in India often calculates returns using simple interest, providing predictable income for retirees.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <h3 className="text-xl font-semibold text-dark-green mt-8 mb-3">Comparing Simple Interest vs. Compound Interest</h3>
          <p className="text-charcoal mb-4">
            While simple interest calculates interest only on the initial principal, compound interest calculates interest on 
            both the principal and the accumulated interest. Over long periods, this difference can be substantial.
          </p>
          <p className="text-charcoal mb-4">
            For investors, compound interest generally yields higher returns for long-term investments. However, for borrowers, 
            loans with simple interest structures are often more beneficial as they result in lower total interest payments.
          </p>
          
          <h3 className="text-xl font-semibold text-dark-green mt-8 mb-3">Tips for Maximizing Benefits of Simple Interest Products</h3>
          <ol className="list-decimal pl-6 space-y-2 my-3">
            <li>Compare interest rates across different financial institutions before investing or taking a loan.</li>
            <li>For borrowers, try to make prepayments whenever possible to reduce the outstanding principal.</li>
            <li>For short-term investments (1-3 years), simple interest products often provide competitive returns with lower risk.</li>
            <li>Consider tax implications of interest income, as interest earned is taxable according to your income tax slab in India.</li>
            <li>Align investment tenures with your financial goals to maximize returns while maintaining necessary liquidity.</li>
          </ol>
          
          <h3 className="text-xl font-semibold text-dark-green mt-8 mb-3">Conclusion</h3>
          <p className="text-charcoal mb-4">
            Understanding simple interest is crucial for making informed financial decisions. Whether you're saving, investing, or borrowing, 
            this calculator provides a clear picture of how your money will grow or how much a loan will cost over time. 
            Use this tool to plan your finances effectively, compare different scenarios, and achieve your financial goals with confidence.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculatorInfo;
