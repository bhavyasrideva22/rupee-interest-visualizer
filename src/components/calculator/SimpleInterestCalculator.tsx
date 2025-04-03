
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { IndianRupee, Download, Mail, Info } from 'lucide-react';
import { toast } from 'sonner';
import { SimpleInterestChart } from './SimpleInterestChart';
import { generatePDF } from '@/utils/pdfGenerator';
import { sendEmail } from '@/utils/emailSender';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CalculationResult {
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

const SimpleInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(100000);
  const [rate, setRate] = useState<number>(5);
  const [time, setTime] = useState<number>(3);
  const [email, setEmail] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [isEmailSending, setIsEmailSending] = useState<boolean>(false);
  const [isPdfGenerating, setIsPdfGenerating] = useState<boolean>(false);

  // Calculate interest whenever inputs change
  useEffect(() => {
    calculateInterest();
  }, [principal, rate, time]);

  const calculateInterest = () => {
    setIsCalculating(true);
    
    // Simple interest calculation: I = P × R × T
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;
    
    // Create yearly breakdown
    const yearlyBreakdown = [];
    for (let year = 1; year <= time; year++) {
      const yearlyInterest = (principal * rate * year) / 100;
      yearlyBreakdown.push({
        year,
        interest: yearlyInterest,
        balance: principal + yearlyInterest
      });
    }
    
    setResult({
      principal,
      rate,
      time,
      interest,
      totalAmount,
      yearlyBreakdown
    });
    
    setIsCalculating(false);
  };

  const handlePrincipalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPrincipal(value);
    }
  };

  const handleRateChange = (value: number[]) => {
    setRate(value[0]);
  };

  const handleTimeChange = (value: number[]) => {
    setTime(value[0]);
  };

  const handleDownloadPDF = async () => {
    if (!result) return;
    
    setIsPdfGenerating(true);
    try {
      await generatePDF(result);
      toast.success('PDF downloaded successfully');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF');
    } finally {
      setIsPdfGenerating(false);
    }
  };

  const handleSendEmail = async () => {
    if (!result || !email) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsEmailSending(true);
    try {
      await sendEmail(email, result);
      toast.success('Result sent to your email');
      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send email');
    } finally {
      setIsEmailSending(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <Card className="shadow-lg border-mint-green/30">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-dark-green mb-6 flex items-center">
                <IndianRupee className="mr-2 h-6 w-6" />
                Simple Interest Calculator
              </h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="principal" className="text-charcoal">Principal Amount (₹)</Label>
                    <span className="text-sm text-muted-foreground">₹{principal.toLocaleString('en-IN')}</span>
                  </div>
                  <Input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={handlePrincipalChange}
                    className="bg-white border-mint-green/50 focus:border-dark-green"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="rate" className="text-charcoal">Interest Rate (%)</Label>
                    <span className="text-sm text-muted-foreground">{rate}%</span>
                  </div>
                  <Slider
                    id="rate"
                    min={0.1}
                    max={20}
                    step={0.1}
                    value={[rate]}
                    onValueChange={handleRateChange}
                    className="py-4"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="time" className="text-charcoal">Time Period (Years)</Label>
                    <span className="text-sm text-muted-foreground">{time} years</span>
                  </div>
                  <Slider
                    id="time"
                    min={1}
                    max={30}
                    step={1}
                    value={[time]}
                    onValueChange={handleTimeChange}
                    className="py-4"
                  />
                </div>
              </div>

              {/* Results Panel */}
              {result && (
                <div className="p-4 bg-mint-green/10 rounded-lg border border-mint-green/30 mt-6">
                  <h3 className="text-lg font-semibold text-dark-green mb-3">Results Summary</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm">
                      <p className="text-muted-foreground">Principal</p>
                      <p className="font-semibold">₹{result.principal.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground">Rate</p>
                      <p className="font-semibold">{result.rate}% p.a.</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground">Time</p>
                      <p className="font-semibold">{result.time} years</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground">Interest Earned</p>
                      <p className="font-semibold text-dark-green">₹{result.interest.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="text-sm col-span-2">
                      <p className="text-muted-foreground">Total Amount</p>
                      <p className="font-semibold text-lg text-dark-green">₹{result.totalAmount.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Email and Download */}
              <div className="space-y-3 mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white"
                  />
                  <Button 
                    variant="outline" 
                    className="flex-shrink-0 bg-white"
                    onClick={handleSendEmail}
                    disabled={isEmailSending || !email}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {isEmailSending ? 'Sending...' : 'Email'}
                  </Button>
                </div>
                
                <Button 
                  className="w-full bg-gold hover:bg-gold/90 text-dark-green"
                  onClick={handleDownloadPDF}
                  disabled={isPdfGenerating || !result}
                >
                  <Download className="h-4 w-4 mr-2" />
                  {isPdfGenerating ? 'Generating PDF...' : 'Download Results as PDF'}
                </Button>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-4 rounded-lg border border-mint-green/30">
              {result ? (
                <SimpleInterestChart result={result} />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Enter values to see chart</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Formula and Explanation */}
      <div className="mt-8 animate-fade-in">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold text-dark-green">Understanding Simple Interest</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Info className="h-4 w-4 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-dark-green text-white">
                <p className="max-w-xs">Simple interest is calculated only on the initial principal</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <Card className="mb-6 border-mint-green/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-dark-green mb-2">Simple Interest Formula</h3>
            <div className="bg-mint-green/10 p-4 rounded-lg flex items-center justify-center">
              <p className="font-mono text-lg">
                I = P × r × t
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm">
              <div>
                <span className="font-semibold">I</span> = Interest
              </div>
              <div>
                <span className="font-semibold">P</span> = Principal
              </div>
              <div>
                <span className="font-semibold">r</span> = Rate (in decimal)
              </div>
              <div>
                <span className="font-semibold">t</span> = Time (in years)
              </div>
              <div>
                <span className="font-semibold">A</span> = P + I (Total Amount)
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;
