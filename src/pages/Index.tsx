
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleInterestCalculator from '@/components/calculator/SimpleInterestCalculator';
import CalculatorInfo from '@/components/calculator/CalculatorInfo';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-white flex flex-col">
      <Header />
      <main className="flex-grow container py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">Simple Interest Calculator</h1>
          <p className="text-charcoal mb-8">
            Calculate simple interest on investments and loans with our easy-to-use calculator. 
            Visualize your interest growth, download results, and make informed financial decisions.
          </p>
          
          <SimpleInterestCalculator />
          <CalculatorInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
